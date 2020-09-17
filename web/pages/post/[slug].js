import { useRouter } from "next/router";
import client from "../../client";

const Post = () => {
  const router = useRouter();

  return (
    <article>
      <h1>{router.query.slug}</h1>
    </article>
  );
};
Post.getInitialProps = async function (context) {
  //Needs to default the slug so it doesnt return undefiled
  const { slug = "" } = context.query;
  co;
  return await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });
};
export default Post;
