import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'QuestDesignSystem5LightTheme';
import SuperContainerComp from 'components/SuperContainer/SuperContainer';

const Home = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <main>
            <SuperContainerComp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Home;
