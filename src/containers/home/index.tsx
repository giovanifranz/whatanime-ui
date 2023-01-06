import Head from 'next/head';

import { Layout } from '@/components/Layout';
import { useAnimeById, useAnimeRandom } from '@/hooks/useAnime';

import { AnimeBanner, Quote, Search } from './components';
import { Box, Container, Heading } from './styles';

export function Home() {
  const { data: animeRandom } = useAnimeRandom();
  const { data: animeById } = useAnimeById(21);

  return (
    <Layout>
      <Head>
        <title>WhatAnime{animeRandom ? ` | ${animeRandom.title}` : null} </title>
      </Head>
      <Container>
        <Search />
        <Quote />
      </Container>
      <Container>
        <Box>
          <Heading size="5xl" as="h1">
            ANIME OF THE DAY
          </Heading>
          <AnimeBanner anime={animeRandom} />
        </Box>
        <Quote />
      </Container>
      <Container>
        <Box>
          <Heading size="5xl" as="h1">
            RESULTS
          </Heading>
          <AnimeBanner anime={animeById} />
        </Box>
        <Quote />
      </Container>
    </Layout>
  );
}
