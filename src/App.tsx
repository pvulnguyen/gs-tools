import '@mantine/core/styles.css';
import {
  AppShell,
  Burger,
  createTheme,
  Divider,
  Group,
  MantineProvider,
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {Logo} from './Logo';

const theme = createTheme({
  fontFamily: 'Satoshi, sans-serif',
});

export function App() {
  const [opened, {toggle}] = useDisclosure();
  return (
    <MantineProvider theme={theme}>
      <AppShell
        layout="alt"
        padding="md"
        withBorder={false}
        header={{height: 60}}
        footer={{height: 60}}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: {mobile: !opened},
        }}
        aside={{
          width: 300,
          breakpoint: 'md',
          collapsed: {desktop: false, mobile: true},
        }}
      >
        <AppShell.Header>
          <Group h="100%" p="md">
            <Burger
              hiddenFrom="sm"
              size="sm"
              opened={opened}
              onClick={toggle}
            />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md" bg="dark.9">
          <Group>
            <Burger
              hiddenFrom="sm"
              size="sm"
              opened={opened}
              onClick={toggle}
            />
            <Logo />
          </Group>
          <Divider />
        </AppShell.Navbar>
        <AppShell.Main>

        </AppShell.Main>
        <AppShell.Aside p="md">

        </AppShell.Aside>
        <AppShell.Footer p="md">

        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
