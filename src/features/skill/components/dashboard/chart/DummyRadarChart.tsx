import { Stack, Typography } from "@mui/material";
import { Unstable_RadarChart as RadarChart } from "@mui/x-charts";

export const DummyRadarChart = () => {
    const categories = [
        "要件定義",
        "システム設計",
        "コーディング",
        "テスト",
        "運用・保守",
        "一般",
    ];
    const dummyValues = [7.5, 6.2, 8.1, 5.9, 4.7, 4.4];

    return (
        <Stack gap={2}>
            <Typography variant="h6">カテゴリ別平均レベル（ダミー）</Typography>
            <RadarChart
                height={300}
                series={[
                    {
                        label: "全体平均",
                        data: dummyValues,
                    },
                ]}
                radar={{
                    max: 10,
                    metrics: categories,
                }}
            />
        </Stack>
    );
};
