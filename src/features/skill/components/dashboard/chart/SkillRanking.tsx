import {
    FormControl,
    FormLabel,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Select,
    Typography,
} from "@mui/material";
import { useSkill } from "../../../api/useSkill";
import { useSkillList } from "../../../api/useSkillList";

export const SkillRanking = () => {
    const { skills, isSkillsLoading, skillsError } = useSkillList();
    return (
        <>
            <Typography variant="h6"> ランキング </Typography>
            <List>
                {skills?.map((skills, index) => (
                    <ListItem divider>
                        <ListItemText primary={`${index + 1}位`} />
                        <ListItemButton>
                            <ListItemText primary={skills.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    );
};
