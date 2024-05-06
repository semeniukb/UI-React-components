import { Box, Stack, Input, Typography, Button } from "@/components";

export const LoginForm = () => {
  return (
    <Box className="px-8 py-12 border border-gray-300 rounded-xl">
      <Stack>
        <Typography tag="h2" weight={"bold"} align={"center"} size={"3xl"} className="mb-2">
          Login
        </Typography>

        <Typography tag="div" emphasis={"low"} size={"sm"} align={"center"} className="mb-8">
          Please enter your credentials to login
        </Typography>

        <Input type="text" label="Username" id="username" placeholder="Username" className="mb-4" />

        <Input label="Password" id="password" type="password" placeholder={"Password"} />

        <Button type="submit" variant={"solid"} className="mt-10">
          Login
        </Button>
      </Stack>
    </Box>
  );
};
