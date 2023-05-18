import xfid from "@jx3box/jx3box-data/data/xf/xfid.json";
import schoolid from "@jx3box/jx3box-data/data/xf/schoolid.json";


export const vector = [
    {
        name: "mount",
        label: "剑三心法图标",
        data: Object.entries(xfid).map(([key, value]) => {
            return {
                id: key,
                name: value,
            };
        }).filter(item => item.id != 0),
        authors: [4011]
    },
    {
        name: "school",
        label: "剑三门派图标",
        data: Object.entries(schoolid).map(([key, value]) => {
            return {
                id: key,
                name: value,
            };
        }).filter(item => item.id != 0),
        authors: [4011]
    },
    {
        name: "logo",
        label: "魔盒标识图标",
        data: [],
        authors: [2, 141787]
    }
]
