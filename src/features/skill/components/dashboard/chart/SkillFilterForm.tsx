import { FormControl, FormLabel, MenuItem, Select, Stack } from "@mui/material";
import { useState } from "react";

export const SkillFilterForm = () => {
    const [department, setDepartment] = useState("");
    const [office, setOffice] = useState("");
    const [rank, setRank] = useState("");

    return (
        <Stack direction="row" spacing={2}>
            {/* 部署 */}
            <FormControl>
                <FormLabel>部署</FormLabel>
                <Select
                    size="small"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    displayEmpty
                    renderValue={(selected) => selected || "全体"}
                    sx={{ width: 100 }}
                >
                    <MenuItem value="">全体</MenuItem>
                    <MenuItem value="開発">開発</MenuItem>
                    <MenuItem value="営業">営業</MenuItem>
                </Select>
            </FormControl>

            {/* 拠点 */}
            <FormControl>
                <FormLabel>拠点</FormLabel>
                <Select
                    size="small"
                    value={office}
                    onChange={(e) => setOffice(e.target.value)}
                    displayEmpty
                    renderValue={(selected) => selected || "全体"}
                    sx={{ width: 100 }}
                >
                    <MenuItem value="">全体</MenuItem>
                    <MenuItem value="東京">東京</MenuItem>
                    <MenuItem value="大阪">大阪</MenuItem>
                </Select>
            </FormControl>

            {/* 等級 */}
            <FormControl>
                <FormLabel>等級</FormLabel>
                <Select
                    size="small"
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                    displayEmpty
                    renderValue={(selected) => selected || "全体"}
                    sx={{ width: 150 }}
                >
                    <MenuItem value="">全体</MenuItem>
                    <MenuItem value="Grade 1">Grade 1</MenuItem>
                    <MenuItem value="Grade 2">Grade 2</MenuItem>
                    <MenuItem value="Grade 3">Grade 3</MenuItem>
                    <MenuItem value="Grade 4">Grade 4</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    );
};
