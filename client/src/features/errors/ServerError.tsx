import { Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router";

export default function ServerError() {
  const { state } = useLocation();
  return (
    <Paper>
      {state.error ? (
        <>
          <Typography
            gutterBottom
            variant="h3"
            sx={{ px: 4, pt: 2 }}
            color="secondary"
          >
            {state.error?.message || "Server Error"}
          </Typography>
          <Divider />
          <Typography variant="body1" sx={{ p: 4 }} color="text.secondary">
            {state.error?.details ||
              "An unexpected error occurred on the server."}
          </Typography>
        </>
      ) : (
        <Typography variant="h3" sx={{ px: 4, pt: 2 }} color="secondary">
          Server Error
        </Typography>
      )}
    </Paper>
  );
}
