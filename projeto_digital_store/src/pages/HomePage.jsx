import { href } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";

const HomePage = () => {
    return ( 
        <>
            <Layout >
                <Section
                    title={"Produtos"}
                    link={{text:"Ver tudo", href: "/produtos"}}
                    titleAlign="center"
                    >

                </Section>
            </Layout> 
        </>
              
     );
}
 

export default HomePage;