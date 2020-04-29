export default class Home extends React.Component {

    render() {
        return (
            <section>
                <video autoPlay="autoPlay" loop="loop" muted className="start-video">
                    <source src="../assets/video/coding.mp4"/>
                    Not supported
                </video>
                <main className="home-Page">
                  <h1>Welcome to</h1>
                  <h2>Gal {'&'} Yuval</h2>
                  <h3>Sprint 3</h3>
                </main>
            </section>
        )
    }
}