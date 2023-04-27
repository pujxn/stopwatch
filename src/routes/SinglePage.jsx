import { useParams } from "react-router-dom";

const SinglePage = () => {

    const aboutData = [
        {
            slug: 'about-app',
            title: 'About the app',
            description:
                "This application is a countdown timer and a lapping stopwatch. It persists the lap data in session storage.",
        },
        {
            slug: 'about-developer',
            title: 'About the developer',
            description:
                'Pujan is a frontend developer looking to be the build performant, delightful and informed experiences for everyone',
        },
    ]

    const { slug } = useParams();

    return (<p>Single Page</p>)
}

export default SinglePage;