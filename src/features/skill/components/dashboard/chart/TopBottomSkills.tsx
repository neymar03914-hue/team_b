import {
    Grid,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";

export const TopBottomSkills = () => {
    const topSkills = ["要件定義", "ヒアリング", "設計"];
    const bottomSkills = ["テスト", "レビュー", "運用"];

    return (
        <Grid container spacing={2}>
            {/* Top3 */}
            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" gutterBottom>
                    強み(Top 3)
                </Typography>
                <List dense>
                    {topSkills.map((skill, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={`${index + 1}. ${skill}`} />
                        </ListItem>
                    ))}
                </List>
            </Grid>

            {/* Bottom3 */}
            <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" gutterBottom>
                    弱み(Bottom 3)
                </Typography>
                <List dense>
                    {bottomSkills.map((skill, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={`${index + 1}. ${skill}`} />
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    );
};
