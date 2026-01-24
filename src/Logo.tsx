import {Box, Text, Title, Typography} from '@mantine/core';

export function Logo() {
  return (
    <Box mb='xs' w="100%">
      <Title order={1} display="flex" c="gray.0" fz="xl" lh='1' tt="uppercase">
        Precinct
        <Typography c="orange.7" fz="xl">
          Op
        </Typography>
      </Title>
      <Text c="gray.5" fz="xs" lh='1' tt="uppercase">
        Agent Toolkit
      </Text>
    </Box>
  );
}
