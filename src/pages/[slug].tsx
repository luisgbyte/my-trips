import client from 'graphql/client'
import { GET_PAGES, GET_PAGES_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'
import { GetPagesQuery, GetPagesBySlugQuery } from 'graphql/generated/graphql'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  // returns anything while being created
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPagesBySlugQuery>(
    GET_PAGES_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!page)
    return {
      notFound: true
    }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
