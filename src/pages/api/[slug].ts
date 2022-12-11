import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  if (typeof slug !== "string") {
    return res.status(404).redirect("/?error=Invalid+Slug");
  }

  const examples = await prisma.link.findFirst({
    where: {
      slug,
    },
  });

  if (!examples) {
    return res.status(404).redirect("/?error=No+Url+Found");
  }

  const { ref } = examples;

  return res.status(200).redirect(ref);
};

export default examples;
