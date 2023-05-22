import React from "react";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import styles from "../styles/Newsletter.module.css";


export default function InputSubscription() {
  const [data, setData] = React.useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} id="demo">
      <FormControl className={styles.Newsletter}>
        <Input
          sx={{ "--Input-decoratorChildHeight": "45px" }}
          placeholder="mail@mui.com"
          type="email"
          required
          value={data.email}
          onChange={(event) =>
            setData({ email: event.target.value, status: "initial" })
          }
          error={data.status === "failure"}
          endDecorator={
            <Button
            className={styles.Button}
              variant="solid"
              color="info"
              loading={data.status === "loading"}
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Subscribe
            </Button>
          }
        />
        {data.status === "failure" && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
          >
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}

        {data.status === "sent" && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.info[400] })}
          >
            You are all set!
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
