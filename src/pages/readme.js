import { promises as fs } from 'fs'
import path from 'path'
import Link from 'next/link'
import remark from 'remark'
import html from 'remark-html'

export default function Readme(props) {
  return (
    <div className="readme">
      <Link href="/" passHref>
        <a href="replace">← Home</a>
      </Link>
      <p>
        This example is a server-rendered page that reads a markdown file from
        the file system and passes it's contents into the page{' '}
        <code>props</code> object.
      </p>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
      {/* https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js */}
      <style jsx>{`
        .readme {
          margin: 2rem auto 0;
          padding: 2rem;
          max-width: 1600px;
          background: #fff;
          box-shadow: 0 0.2rem 0.4rem 0 rgb(0 0 0 / 7%),
            0 2.5rem 4rem 0 rgb(0 0 0 / 10%);
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'README.md')
  const markdown = await fs.readFile(filePath, 'utf8')
  const content = await markdownToHtml(markdown || '')

  if (!markdown) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      content,
    },
  }
}

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
