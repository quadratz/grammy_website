<script setup lang="ts">
import DefaultTheme from 'vitepress/theme-without-fonts'
import { useData } from 'vitepress'
import HomeHeroInfo from "./HomeHeroInfo.vue";

const { Layout } = DefaultTheme as any;
const { frontmatter } = useData();

const timestamp = new Date().toString();
</script>

<template>
  <Layout>
    <template #layout-top>
      <p>Build: {{ timestamp }}</p>
    </template>
    <template #home-hero-info>
      <HomeHeroInfo :name="frontmatter.hero.name" :text="frontmatter.hero.text" :taglines="frontmatter.hero.taglines" />
    </template>
  </Layout>
</template>