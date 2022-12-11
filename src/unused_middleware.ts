export const config = {};

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export default async function middleware(req: NextRequest) {
//   const { url } = req;
//   const { nextUrl } = req;
//   const slug = url.split("/").pop();

//   if (!slug) {
//     return NextResponse.redirect("/?error=Invalid+Slug");
//   }

//   const res = await fetch(nextUrl.origin + "/api/get-url/", {
//     body: JSON.stringify({ slug }),
//     method: "POST",
//   });

//   if (res.status === 404) {
//     return NextResponse.redirect(nextUrl.origin + "/?error=No+Url+Found");
//   }

//   const { ref } = await res.json();

//   console.log(ref);

//   NextResponse.next({
//     request: {
//       url: ref,
//     } as NextRequest,
//   });
// }

// export const config = {
//   matcher: "/l/:slug/",
// };
