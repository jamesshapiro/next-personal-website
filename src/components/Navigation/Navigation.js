'use client';
import React from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';

import styled from 'styled-components';

function Navigation() {
  const [hoveredNavItem, setHoveredNavItem] = React.useState(null);

  const id = React.useId();

  return (
    <nav onMouseLeave={() => setHoveredNavItem(null)}>
      <ul>
        {LINKS.map(({ slug, label, bg, href }) => (
          <li
            key={slug}
            style={{
              zIndex: hoveredNavItem === slug ? 1 : 2,
            }}
          >
            {hoveredNavItem === slug && (
              <motion.div
                layoutId={id}
                className="hovered-backdrop"
                // Note: this part is critical for not messing up the border radius on transitions
                initial={{
                  borderRadius: 8,
                }}
              />
            )}

            <Link href={href} onMouseEnter={() => setHoveredNavItem(slug)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const LINKS = [
  {
    slug: 'home',
    label: 'Home',
    href: '/',
  },
  {
    slug: 'about',
    label: 'About',
    href: '/about/',
  },
  {
    slug: 'projects',
    label: 'Projects',
    href: '/projects/',
  },
  {
    slug: 'rants',
    label: 'Rants',
    href: '/rants/',
  },
];

export default Navigation;
