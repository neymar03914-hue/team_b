import { Stack, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";

export const DummySkillBarChart = () => {
    const dummySkills = [
        { skillName: "ヒアリング", average: 6.2 },
        { skillName: "合意形成", average: 7.0 },
        { skillName: "業務分析", average: 5.1 },
        { skillName: "批判的思考", average: 6.8 },
    ];

    return (
        <Stack gap={2}>
            <Typography variant="h6">スキル別平均スコア（ダミー）</Typography>
            <BarChart
                dataset={dummySkills}
                xAxis={[{ dataKey: "skillName" }]}
                series={[{ dataKey: "average", label: "平均値" }]}
                yAxis={[{ label: "評価値", width: 32 }]}
                height={300}
            />
        </Stack>
    );
};
