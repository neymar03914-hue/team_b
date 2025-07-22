import {
    Card,
    CardContent,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    Stack,
    Typography,
} from "@mui/material";
import { DummyRadarChart } from "./chart/DummyRadarChart";
import { DummySkillBarChart } from "./chart/DummySkillBarChart";
import { SkillFilterForm } from "./chart/SkillFilterForm";
import { SkillLevelChart } from "./chart/SkillLevelChart";
import { SkillRanking } from "./chart/SkillRanking";
import { SkillSimpleRadarChart } from "./chart/SkillSimpleRadarChart";
import { TopBottomSkills } from "./chart/TopBottomSkills";

export const SkillAnalyzeDashboard = () => {
    return (
        <Stack gap={2} padding={2}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }} sx={{ minWidth: "400px" }}>
                    <Card
                        sx={{
                            height: "100%",
                            width: "100%",
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <CardContent>
                            <SkillSimpleRadarChart />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{ minWidth: "400px" }}>
                    <Card sx={{ height: "100%", width: "100%" }}>
                        <CardContent>
                            <SkillLevelChart />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{ minWidth: "400px" }}>
                    <Card
                        sx={{
                            height: "100%",
                            width: "100%",
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <CardContent sx={{ alignItems: "center" }}>
                            <SkillRanking />
                        </CardContent>
                    </Card>
                </Grid>
                {/* ダミーダッシュボード（2×2） */}
                <Grid size={{ xs: 12, md: 12 }} sx={{ minWidth: "400px" }}>
                    <Grid container spacing={2}>
                        {/* 左側：フィルター + レーダー */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Card sx={{ width: "100%" }}>
                                <CardContent>
                                    <SkillFilterForm />
                                    <DummyRadarChart />
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* 右側：棒グラフ + トップボトム */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Card sx={{ width: "100%" }}>
                                <CardContent>
                                    <DummySkillBarChart />
                                    <TopBottomSkills />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    );
};
