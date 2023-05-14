<template>
    <div class="m-star">
        <div class="m-star-header w-card-title"><i class="u-icon el-icon-star-on"></i> 我的收藏</div>
        <div class="m-star-content">
            <div class="u-empty" v-if="stars[type].length == 0">暂无收藏项目噢 (●'ω'●)丿❤</div>
            <div class="u-item" v-for="(item, index) in showList" :key="index" @click="queryItem(item)">
                <img class="u-icon" :src="iconLink(item.icon)" alt="" />
                <div class="u-info">
                    <div class="u-name">{{ item.name }}</div>
                    <div class="u-desc" :title="item.desc">{{ item.desc }}</div>
                    <div class="u-id">ID: {{ item.id }}</div>
                </div>
            </div>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="stars[type].length"
            :page-size="pageSize"
            :current-page.sync="page"
            :hide-on-single-page="true"
        >
        </el-pagination>
    </div>
</template>

<script>
import { starList } from "@/service/cms";
import { mapState } from "vuex";
import { _getResource } from "@/service/node";
import { iconLink } from "@jx3box/jx3box-common/js/utils";

export default {
    name: "DatabaseStar",
    props: {
        type: {
            type: String,
            default: "buff",
        },
        client: {
            type: String,
            default: "std",
        },
    },
    data: () => ({
        page: 1,
        pageSize: 10,
    }),
    computed: {
        ...mapState(["stars"]),
        id_key() {
            const map = {
                buff: "BuffID",
                skill: "SkillID",
                doodad: "ID",
                npc: "ID",
            };
            return map[this.type];
        },
        showList() {
            const list = this.stars[this.type] || [];
            return list.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
        },
    },
    methods: {
        iconLink,
        async getList() {
            const res = await starList(this.type);
            const { code, data } = res.data;
            if (code != 0) return;
            const list = data.list ?? [];
            if (list.length == 0) return;

            // ids
            const ids = list.map((item) => {
                if (["buff", "skill"].includes(this.type)) return `${item.id}${item.level ? `_${item.level}` : ""}`;
                return item.id;
            });
            // 需要的字段
            const fields = [this.id_key, "Remark", "Level", "Name", "IconID", "Desc", "BuffName", "SkillName"];

            // 获取资源
            const resources = (
                await _getResource(this.client, this.type, {
                    ids,
                    fields,
                })
            ).data;
            // 合并
            for (let item of list) {
                const resource = resources.find((r) => {
                    if (["buff", "skill"].includes(this.type) && item.level !== undefined && item.level !== null) {
                        return r[this.id_key] == item.id && r.Level == item.level;
                    } else {
                        return r[this.id_key] == item.id;
                    }
                });
                if (resource) {
                    item.name =
                        resource.Name || resource.SkillName || resource.BuffName || resource.Remark || "无名数据";
                    item.icon = resource.IconID;
                    item.desc = resource.Desc;
                }
                if (this.type === "doodad") item.icon = 10909;
                if (this.type === "npc") item.icon = 0;
            }
            // 保存
            this.stars[this.type] = list;
        },
        async queryItem(item) {
            const query = {
                type: item.type,
                query: item.id,
            };
            if (item.level !== undefined && item.level !== null) query.level = item.level;
            this.$router.push({ query });
        },
    },
    watch: {
        type: {
            handler() {
                this.getList();
            },
            immediate: true,
        },
    },
};
</script>

<style lang="less">
.m-star {
    padding: 10px;

    .m-star-content {
        padding: 10px 10px;
        .u-item {
            box-sizing: border-box;
            .pr;
            height: 48px;
            padding: 6px 4px 6px 44px;

            .pointer;
            transition: all 100ms ease-in-out;
            &:hover {
                background: #f5f5f5;
            }

            .mb(10px);
        }
        .u-info {
            .pr;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .u-name {
            .ellipsis;
            .fz(14px, 1.2);
            .bold;
        }
        .u-desc {
            .ellipsis;
            .fz(12px, 1.2);
            color: #999;
        }
        .u-icon {
            .pa;
            .size(36px);
            left: 4px;
        }
        .u-id {
            .pa;
            right: 0;
            top: 0;
            .fz(10px);
            color: #888;
        }
        .u-empty {
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999;
            .fz(12px);
        }
    }

    .el-pagination {
        display: flex;
        justify-content: center;
    }
}
</style>