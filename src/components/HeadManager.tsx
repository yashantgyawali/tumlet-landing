import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { applyHead, normalizePath } from '@/seo/head';
import { NOT_FOUND_META, findPageMeta } from '@/seo/pages';

const BLOG_POST = /^\/blog\/[^/]+$/;

// Keeps document.head in sync with the current route on client-side
// navigation. The first page load already has the right tags from the
// pre-rendered HTML; this only matters when moving between pages.
const HeadManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalizePath(pathname);
    // Blog posts set their own head from frontmatter (see pages/Blog.tsx).
    if (BLOG_POST.test(path)) return;
    applyHead(findPageMeta(path) ?? NOT_FOUND_META);
  }, [pathname]);

  return null;
};

export default HeadManager;
