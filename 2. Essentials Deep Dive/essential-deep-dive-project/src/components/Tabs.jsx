export default function Tabs ({children, buttons, ButtonsContainer = 'menu'}) {
    // const ButtonContainer = {buttonsContainer};
    return (
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            {children}
        </>
    )
}