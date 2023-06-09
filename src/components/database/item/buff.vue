<template>
    <div class="m-database-item m-database-item__buff">
        <!-- 项目基本信息 -->
        <div class="m-item">
            <img class="u-icon" :title="'IconID:' + data.IconID" :src="iconLink(data.IconID)" />
            <div class="u-title">
                <div class="u-name">
                    <span class="u-name-primary">{{ data.Name }}</span>
                    <span class="u-name-secondary" v-if="data.BuffName"> ({{ data.BuffName }})</span>
                </div>
                <el-tag size="medium" @click.stop="copy('BuffID')">
                    <i class="el-icon-document-copy u-copy"></i>
                    <span class="u-id" title="点击快速复制">ID:{{ data.BuffID }}</span>
                </el-tag>
            </div>
            <div class="u-desc-text">
                <p class="u-desc-content">{{ data.Desc }}</p>
                <span v-if="detach_type" class="u-detach">{{ detach_type }}</span>
            </div>
            <div class="u-primary">
                <span class="u-primary-items">
                    <span class="u-primary-item"> Level: {{ data.Level }} </span>
                    <span class="u-primary-item"> Remark: {{ data.Remark }} </span>
                </span>
            </div>
        </div>
        <!-- 项目详情，仅在单页展示 -->
        <template v-if="showDetail">
            <!-- 详细字段列表 -->
            <div class="m-detail">
                <span class="u-prop" v-for="(item, index) in displayProps" :key="index">
                    <!-- 属性名 -->
                    <el-tooltip v-if="item.keyDesc" effect="dark" :content="item.key" placement="top">
                        <em class="u-prop-key" :class="{ isAdv: item.isAdv }">
                            {{ item.keyDesc }}
                        </em>
                    </el-tooltip>
                    <em v-else class="u-prop-key">{{ item.key }}</em>
                    <!-- 属性值 -->
                    <el-tooltip v-if="item.valueDesc" effect="dark" placement="top">
                        <div v-html="item.valueDesc" slot="content"></div>
                        <span>{{ item.value }}</span>
                    </el-tooltip>
                    <span v-else>{{ item.value }}</span>
                </span>
            </div>
            <!-- 项目操作 -->
            <div class="m-operation" v-if="isLogin">
                <el-button
                    v-if="!star_id"
                    class="u-button u-star"
                    icon="el-icon-star-off"
                    plain
                    @click="star('buff', data.BuffID, data.Level)"
                >
                    收藏数据
                </el-button>
                <el-button
                    v-else-if="isLogin"
                    class="u-button u-stared"
                    icon="el-icon-star-on"
                    plain
                    @click="cancelStar"
                >
                    取消收藏
                </el-button>
                <el-button
                    class="u-button u-to-dbm"
                    icon="el-icon-connection"
                    plain
                    @click="toDbm('buff', data.BuffID, data.Level)"
                >
                    在线构建
                </el-button>
            </div>
        </template>
    </div>
</template>
<script>
import itemMixin from "./mixin";
import detach_types from "@/assets/data/database/detach_types.json";
import props_buff from "@/assets/data/database/props_buff.json";
import attr_desc from "@/assets/data/database/attr_desc.json";

export default {
    name: "ItemBuff",
    mixins: [itemMixin],
    data: () => ({
        detach_types,
        props_buff,
    }),
    computed: {
        detach_type: function () {
            const type = this.data?.DetachType;
            if (type && this.detach_types[type]) return this.detach_types[type];
            return null;
        },
        displayProps: function () {
            const result = [];
            // buff属性
            for (let i = 1; i <= 15; i++) {
                if (this.data[`BeginAttrib${i}`] === null) continue;
                const attrDesc = this.attrDesc(this.data[`BeginAttrib${i}`]);
                let value = this.data[`BeginValue${i}A`];
                if (this.data[`BeginValue${i}B`] !== null) value += ` | ${this.data[`BeginValue${i}B`]}`;
                const attr = {
                    key: `BeginAttrib${i}`,
                    keyDesc: "Buff属性" + i,
                    value: attrDesc + " | " + value,
                    valueDesc: `BeginAttrib${i}: ${this.data[`BeginAttrib${i}`]} <br />
                        BeginValue${i}A: ${this.data[`BeginValue${i}A`]} <br />
                        BeginValue${i}B: ${this.data[`BeginValue${i}B`] ?? ""}`,
                };
                result.unshift(attr);
            }
            // 常规属性
            for (const key in this.data) {
                if (!this.propsFilter(key)) continue;
                result.push({
                    key,
                    keyDesc: this.props_buff?.[key]?.desc || null,
                    value: this.data[key],
                    valueDesc: this.attrDesc(this.data[key]),
                    isAdv: this.props_buff[key] && this.props_buff[key]["adv"],
                });
            }
            return result;
        },
    },
    methods: {
        propsFilter(key) {
            if (key === "IdKey") return false;
            if (this.data[key] === null) return false;
            if (this.props_buff?.[key]?.basic) return false;
            if (this.props_buff?.[key]?.adv && !this.hasRight) return false;
            if (["BeginValue", "BeginAttrib"].some((item) => key.startsWith(item))) return false;
            return true;
        },
        attrDesc(attr) {
            return attr_desc[attr] ?? null;
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/database/item.less";
.m-database-item__buff {
    .u-desc-text {
        display: flex;
        align-items: center;
    }

    .u-desc-content {
        .fz(13px, 1.8);
        flex-grow: 1;
        margin: 0 0 5px 0;
    }
}
</style>