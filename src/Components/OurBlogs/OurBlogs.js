import React from 'react'
import PropTypes from 'prop-types'

import { Box, Grid, Typography, Pagination } from '@mui/material'

import ourPost1 from './ourPost1.jpg'
import ourPost2 from './ourPost2.jpg'
import ourPost3 from './ourPost3.jpg'

import theme from '../../theme'

const blogsArray = [
  {
    id: 0,
    title: 'Exploring New Horizons: Discover, Inspire, Transform',
    image: ourPost1,
    author: 'Jhon',
    date: '28/02/2024'
  },
  {
    id: 1,
    title: 'The Art of Living: Uncover Passions and Find Joy in the Everyday',
    image: ourPost2,
    author: 'Jhon',
    date: '28/02/2024'
  },
  {
    id: 2,
    title: 'Tech Trends Unleashed: Navigating the Future of Innovation',
    image: ourPost3,
    author: 'Jhon',
    date: '28/02/2024'
  },
  {
    id: 3,
    title: 'Exploring New Horizons: Discover, Inspire, Transform',
    image: ourPost1,
    author: 'Jhon',
    date: '28/02/2024'
  },
  {
    id: 4,
    title: 'The Art of Living: Uncover Passions and Find Joy in the Everyday',
    image: ourPost2,
    author: 'Jhon',
    date: '28/02/2024'
  },
  {
    id: 5,
    title: 'Tech Trends Unleashed: Navigating the Future of Innovation',
    image: ourPost3,
    author: 'Jhon',
    date: '28/02/2024'
  },
  {
    id: 6,
    title: 'Exploring New Horizons: Discover, Inspire, Transform',
    image: ourPost1,
    author: 'Jhon',
    date: '28/02/2024'
  },
  {
    id: 7,
    title: 'The Art of Living: Uncover Passions and Find Joy in the Everyday',
    image: ourPost2,
    author: 'Jhon',
    date: '28/02/2024'
  },
  {
    id: 8,
    title: 'Tech Trends Unleashed: Navigating the Future of Innovation',
    image: ourPost3,
    author: 'Jhon',
    date: '28/02/2024'
  }
]

export const OurBlogs = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  // eslint-disable-next-line no-unused-vars
  const [paginationPerPage, setPaginationPerPage] = React.useState(6)
  const [currentPage, setCurrentPage] = React.useState(1)

  const indexOfLastBlog = currentPage * paginationPerPage
  const indexOfFirstBlog = indexOfLastBlog - paginationPerPage

  const onChangePagination = (e, p) => {
    setCurrentPage(p)
  }

  const numOfTotalPages = Math.ceil(blogsArray.length / paginationPerPage)

  const visibleBlogs = blogsArray.slice(indexOfFirstBlog, indexOfLastBlog)

  return (
    <Box
      sx={{
        ...sx,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'white',
        padding: '40px'
      }}
      {...otherProps}
    >
      <Typography
        variant={'h1'}
        sx={{
          marginBottom: '40px'
        }}
      >
        PAGINATION
      </Typography>
      <Grid
        spacing={{ xs: 2, md: 2 }}
        container
      >
        {
        visibleBlogs && visibleBlogs.map((blog) => {
          return (
            <Grid
              key={blog.id}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <Box
                color={'black'}
                sx={{
                  display: 'flex',
                  cursor: 'pointer'
                }}
              >
                <Box>
                  <img
                    src={blog.image}
                    alt={'something'}
                    style={{
                      height: '95px',
                      objectFit: 'cover',
                      width: '108px'
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    padding: '0px 10px 30px'
                  }}
                >
                  <Typography
                    variant={'body2'}
                    fontWeight={theme.typography.fontWeightBold}
                  >
                    {blog.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'cetner',
                      justifyContent: 'space-between',
                      width: '100%'
                    }}
                  >
                    <Typography
                      variant={'caption'}
                    >
                      {blog.author}
                    </Typography>
                    <Typography
                      variant={'caption'}
                    >
                      {blog.date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          )
        })
      }
      </Grid>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '30px'
        }}
      >
        <Pagination
          count={numOfTotalPages}
          onChange={onChangePagination}
        />
      </Box>
    </Box>
  )
}

OurBlogs.propTypes = {
  sx: PropTypes.object
}

export default OurBlogs
