function News({ data }) {
  return <h1 className="content">{data}</h1>;
}

export default News;

export async function getStaticProps(context) {
  return {
    props: {
      data: context.preview
        ? "List of previewed news. "
        : "List of published News.",
    },
  };
}
