import MainPage from "./pages/Main.Page";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    const [theme, colorMode] = useMode()

    return (
    <>
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path='/country/:name' element={<DetailsPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </ThemeProvider>
        </ColorModeContext.Provider>
    </>
  )
}

export default App
