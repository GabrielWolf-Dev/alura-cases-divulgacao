import FAQScreen from "../src/components/screens/FAQScreen";

export default FAQScreen;

export async function getStaticProps() {
    const URL_DATA_FAQ = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

    const res = await fetch(URL_DATA_FAQ);
    const data = await res.json();

    return {
      props: {
          dataFaq: data
      },
    }
}
  