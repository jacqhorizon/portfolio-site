import React from "react"
import { ThemeProvider } from "styled-components"
import theme from '../theme.js'
import NavigationBar from "../components/navigation.js"
import LandingPage from "./landingPage.js"

const LayoutContainer = () => {
    return (
        <>
        <ThemeProvider theme={theme}>
            <NavigationBar />
            <div>it's the layout babey</div>
            <nav>
                <ul>
                    <li>home</li>
                    <li>code</li>
                    <li>animation</li>
                </ul>
            </nav>
            <div
            style={{lineHeight: '200px'}}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie a iaculis at. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Tristique nulla aliquet enim tortor at auctor urna nunc id. In iaculis nunc sed augue lacus viverra vitae. In nisl nisi scelerisque eu ultrices vitae auctor eu. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eu ultrices vitae auctor eu augue ut. Augue ut lectus arcu bibendum at varius. Vitae ultricies leo integer malesuada nunc vel risus. Est ante in nibh mauris cursus mattis molestie a.

Consectetur purus ut faucibus pulvinar elementum integer. In cursus turpis massa tincidunt dui ut ornare lectus sit. Arcu odio ut sem nulla. Id volutpat lacus laoreet non curabitur gravida arcu ac. Facilisis volutpat est velit egestas dui id ornare arcu odio. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Fermentum odio eu feugiat pretium nibh ipsum. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Turpis egestas integer eget aliquet nibh praesent tristique. Sit amet nisl purus in mollis nunc sed id. Condimentum vitae sapien pellentesque habitant morbi. Eget nullam non nisi est. Faucibus vitae aliquet nec ullamcorper sit.

Et malesuada fames ac turpis egestas maecenas. Venenatis cras sed felis eget. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Porttitor massa id neque aliquam vestibulum. Iaculis urna id volutpat lacus laoreet. Vulputate enim nulla aliquet porttitor lacus. Enim nec dui nunc mattis enim. Aliquam ultrices sagittis orci a. Morbi enim nunc faucibus a pellentesque sit. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Et malesuada fames ac turpis. Tellus id interdum velit laoreet. Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut tellus. Amet venenatis urna cursus eget nunc scelerisque viverra.

Duis ut diam quam nulla porttitor massa id. Elementum nibh tellus molestie nunc non. Est ante in nibh mauris cursus mattis molestie a iaculis. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Proin sed libero enim sed faucibus. In ante metus dictum at tempor. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Risus in hendrerit gravida rutrum quisque non tellus. Urna nunc id cursus metus. Volutpat blandit aliquam etiam erat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Leo urna molestie at elementum eu facilisis sed odio morbi. Interdum velit euismod in pellentesque massa placerat duis ultricies. A scelerisque purus semper eget. Id leo in vitae turpis massa sed elementum tempus egestas.

Felis eget velit aliquet sagittis id. Ipsum faucibus vitae aliquet nec. Pretium quam vulputate dignissim suspendisse in est ante in. Bibendum arcu vitae elementum curabitur. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. In arcu cursus euismod quis viverra nibh cras. Proin fermentum leo vel orci porta non. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Leo urna molestie at elementum eu facilisis. Maecenas ultricies mi eget mauris. Lacinia at quis risus sed vulputate odio ut enim blandit.
            </div>
            <LandingPage />
        </ThemeProvider>
        </>
    )
}

export default LayoutContainer