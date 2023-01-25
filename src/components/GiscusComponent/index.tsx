import React from 'react'
import Giscus from '@giscus/react'
import { useColorMode } from '@docusaurus/theme-common'

export default function GiscusComponent() {
  const { colorMode } = useColorMode()

  return (
    <Giscus
      repo="quantaleap/quantaleap-docs"
      repoId="R_kgDOIrbBuw"
      category="Blog"
      categoryId="DIC_kwDOIrbBu84CTzC9"
      mapping="og:title"
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
    />
  )
}
