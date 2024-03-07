import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDemoPostApi, useUserList } from "ApiHelper";
import { useEffect, useState } from "react";
import HomePage from "pages/HomePage";
import Header from "components/Header";
import { Box } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const { data, isLoading, isError } = useUserList({});
  const DemoApiMutation = useDemoPostApi();

  console.table(data?.data);

  const postBtn = async () => {
    const bodyData = {};
    let result = await DemoApiMutation.mutateAsync(bodyData);
    console.log(result?.data);
  };

  useEffect(() => {
    // postBtn();
  }, []);

  return (
    <div>
      <Header open={open} setOpen={setOpen} />
      <Box>
        <Routes>
          <Route element={<HomePage open={open} setOpen={setOpen} />} path="/" />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
