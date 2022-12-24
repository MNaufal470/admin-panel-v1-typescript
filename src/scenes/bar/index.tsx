import { Box } from "@mui/material";
import Header from "../../components/Header";
import Bar from "../../components/BarChart";

const BarChart = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subTitle="Simple Bar Chart" />
      <Box height="75vh">
        <Bar />
      </Box>
    </Box>
  );
};

export default BarChart;
