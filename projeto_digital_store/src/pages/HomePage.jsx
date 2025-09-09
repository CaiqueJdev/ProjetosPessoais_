import { href } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";

const HomePage = () => {
    return ( 
        <main>
            <Layout >
                <Section
                    title={"Produtos"}
                    link={{text:"Ver tudo", href: "/produtos"}}
                    titleAlign="center"
                >

                </Section>
            </Layout> 
        </main>        
     );
}
 

export default HomePage;