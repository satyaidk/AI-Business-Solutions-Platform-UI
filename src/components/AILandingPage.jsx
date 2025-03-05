import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Link,
  Divider,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Telegram as TelegramIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  AutoGraph as AutoGraphIcon,
} from '@mui/icons-material';
import LLMTimeline from './LLMTimeline';

const AILandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const projects = [
    {
      title: 'AI-Powered Customer Service Bot',
      description: 'An intelligent chatbot that handles customer inquiries 24/7 with natural language understanding.',
      image: 'https://images.pexels.com/photos/7682204/pexels-photo-7682204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Custom LLM Training Platform',
      description: 'A platform for businesses to train and deploy their own language models on domain-specific data.',
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time analytics and insights powered by advanced AI algorithms for business intelligence.',
      image: 'https://images.pexels.com/photos/10468213/pexels-photo-10468213.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const socialMedia = [
    {
      name: 'GitHub',
      username: '@aibusiness',
      followers: '12.5K',
      icon: <GitHubIcon />,
      color: '#333333',
      url: 'https://github.com',
    },
    {
      name: 'LinkedIn',
      username: '@ai-business',
      followers: '25.3K',
      icon: <LinkedInIcon />,
      color: '#0077B5',
      url: 'https://linkedin.com',
    },
    {
      name: 'Twitter',
      username: '@aibusiness',
      followers: '45.8K',
      icon: <TwitterIcon />,
      color: '#1DA1F2',
      url: 'https://twitter.com',
    },
    {
      name: 'Facebook',
      username: '@aibusiness',
      followers: '38.2K',
      icon: <FacebookIcon />,
      color: '#4267B2',
      url: 'https://facebook.com',
    },
    {
      name: 'Instagram',
      username: '@aibusiness',
      followers: '52.1K',
      icon: <InstagramIcon />,
      color: '#E4405F',
      url: 'https://instagram.com',
    },
    {
      name: 'YouTube',
      username: '@aibusiness',
      followers: '15.7K',
      icon: <YouTubeIcon />,
      color: '#FF0000',
      url: 'https://youtube.com',
    },
    {
      name: 'Telegram',
      username: '@aibusiness',
      followers: '8.9K',
      icon: <TelegramIcon />,
      color: '#0088cc',
      url: 'https://telegram.org',
    },
  ];

  return (
    <Box sx={{ 
      background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
      minHeight: '100vh',
      color: '#ffffff',
    }}>
      {/* Navigation Menu */}
      <AppBar 
        position="static" 
        sx={{ 
          background: 'rgba(10, 10, 10, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              marginLeft: { xs: 0, md: '-10rem' } 
            }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'linear-gradient(145deg, #00c3ff 0%, #00a2ff 100%)',
                  boxShadow: '0 0 20px rgba(0, 195, 255, 0.3)',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': {
                      boxShadow: '0 0 20px rgba(0, 195, 255, 0.3)',
                    },
                    '50%': {
                      boxShadow: '0 0 30px rgba(0, 195, 255, 0.5)',
                    },
                    '100%': {
                      boxShadow: '0 0 20px rgba(0, 195, 255, 0.3)',
                    },
                  },
                }}
              >
                <AutoGraphIcon 
                  sx={{ 
                    color: '#ffffff',
                    fontSize: '24px',
                    filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))',
                  }} 
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #00c3ff, #00a2ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AI Business
              </Typography>
            </Box>

            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ display: 'flex', marginRight: '-10rem', gap: 4 }}>
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    sx={{
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontWeight: 500,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0',
                        height: '2px',
                        bottom: '-4px',
                        left: '0',
                        background: 'linear-gradient(90deg, #00c3ff, #00a2ff)',
                        transition: 'width 0.3s ease-in-out',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuToggle}
                sx={{ color: '#ffffff' }}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMenuToggle}
        PaperProps={{
          sx: {
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(10px)',
            width: '250px',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <List sx={{ mt: 2 }}>
          {menuItems.map((item) => (
            <ListItem 
              key={item.label}
              button
              onClick={handleMenuToggle}
              sx={{
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ListItemText 
                primary={item.label}
                sx={{
                  color: '#ffffff',
                  '&:hover': {
                    color: '#00c3ff',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          color: 'white',
          pt: { xs: 8, sm: 10, md: 12 },
          pb: { xs: 8, sm: 10, md: 12 },
          mb: 6,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 195, 255, 0.1) 0%, transparent 50%)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center" sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3rem',
                    md: '3.5rem',
                    lg: '4rem',
                  },
                  lineHeight: 1.2,
                  position: 'relative',
                  color: '#ffffff',
                  WebkitTextStroke: '2px transparent',
                  background: 'linear-gradient(90deg, #00c3ff, #ff00ff, #00ff00)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  animation: 'stroke 3s linear infinite',
                  '@keyframes stroke': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '200% 50%' },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, #00c3ff, #ff00ff, #00ff00)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextStroke: '2px transparent',
                    animation: 'stroke 3s linear infinite',
                    filter: 'blur(8px)',
                    opacity: 0.5,
                    zIndex: -1,
                  },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                AI Solutions for Tomorrow's Business
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: '#b0b0b0',
                  lineHeight: 1.6,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Empowering businesses with cutting-edge AI technology and custom LLM solutions for tomorrow's challenges.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(145deg, #00c3ff 0%, #00a2ff 100%)',
                    '&:hover': {
                      background: 'linear-gradient(145deg, #00a2ff 0%, #0081ff 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 0 20px rgba(0, 195, 255, 0.6)',
                    },
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#00c3ff',
                    color: '#00c3ff',
                    '&:hover': {
                      borderColor: '#00a2ff',
                      background: 'rgba(0, 195, 255, 0.1)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: '300px', sm: '400px', md: '400px' },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 50% 50%, rgba(0, 195, 255, 0.2) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                    zIndex: -1,
                  },
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.8)',
                      transition: 'filter 0.3s ease-in-out',
                      '&:hover': {
                        filter: 'brightness(1)',
                      },
                    }}
                    image="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="AI Technology"
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 4, 
            textAlign: 'center',
            color: '#ffffff',
            textShadow: '0 0 20px rgba(0, 195, 255, 0.3)',
          }}
        >
          Why Choose Our AI Solutions?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card 
              sx={{ 
                height: '100%',
                background: 'linear-gradient(145deg, #0f0f0f 0%, #1a1a1a 100%)',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 0 20px rgba(0, 195, 255, 0.6)',
                  border: '1px solid rgba(0, 195, 255, 0.3)',
                },
              }}
            >
              <CardContent>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{
                    color: '#ffffff',
                    fontWeight: 600,
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  Expertise in LLM Development
                </Typography>
                <Typography 
                  sx={{
                    color: '#b0b0b0',
                    transition: 'color 0.3s ease-in-out',
                    '&:hover': {
                      color: '#ffffff',
                    },
                  }}
                >
                  Our team specializes in developing and fine-tuning large language models for specific business needs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card 
              sx={{ 
                height: '100%',
                background: 'linear-gradient(145deg, #0f0f0f 0%, #1a1a1a 100%)',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 0 20px rgba(0, 195, 255, 0.6)',
                  border: '1px solid rgba(0, 195, 255, 0.3)',
                },
              }}
            >
              <CardContent>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{
                    color: '#ffffff',
                    fontWeight: 600,
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  Custom AI Solutions
                </Typography>
                <Typography 
                  sx={{
                    color: '#b0b0b0',
                    transition: 'color 0.3s ease-in-out',
                    '&:hover': {
                      color: '#ffffff',
                    },
                  }}
                >
                  We create tailored AI applications that integrate seamlessly with your existing business processes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card 
              sx={{ 
                height: '100%',
                background: 'linear-gradient(145deg, #0f0f0f 0%, #1a1a1a 100%)',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 0 20px rgba(0, 195, 255, 0.6)',
                  border: '1px solid rgba(0, 195, 255, 0.3)',
                },
              }}
            >
              <CardContent>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{
                    color: '#ffffff',
                    fontWeight: 600,
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  Continuous Support
                </Typography>
                <Typography 
                  sx={{
                    color: '#b0b0b0',
                    transition: 'color 0.3s ease-in-out',
                    '&:hover': {
                      color: '#ffffff',
                    },
                  }}
                >
                  We provide ongoing support and updates to ensure your AI solutions remain cutting-edge.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* LLM Timeline Section */}
      <LLMTimeline />

      {/* Projects Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 4, 
            textAlign: 'center',
            color: '#ffffff',
            marginTop: '2.5rem',
            marginBottom: '2.5rem',
            textShadow: '0 0 20px rgba(0, 195, 255, 0.3)',
          }}
        >
          Our Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  background: 'linear-gradient(145deg, #0f0f0f 0%, #1a1a1a 100%)',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease-in-out',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': {
                      transform: 'translateY(0)',
                    },
                    '50%': {
                      transform: 'translateY(-5px)',
                    },
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 0 20px rgba(0, 195, 255, 0.6)',
                    border: '1px solid rgba(0, 195, 255, 0.3)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    filter: 'brightness(0.8)',
                    transition: 'filter 0.3s ease-in-out',
                    '&:hover': {
                      filter: 'brightness(1)',
                    },
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{
                      color: '#ffffff',
                      fontWeight: 600,
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: '#b0b0b0',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': {
                        color: '#ffffff',
                      },
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box sx={{ 
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
        py: 8,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 4, 
              textAlign: 'center',
              color: '#ffffff',
              textShadow: '0 0 20px rgba(0, 195, 255, 0.3)',
            }}
          >
            Get in Touch
          </Typography>
          
          {/* Social Media Cards */}
          <Grid container spacing={4} sx={{ mb: 6, px: { xs: 2, sm: 3, md: 4 }, justifyContent: 'center' }}>
            {socialMedia.map((social, index) => (
              <Grid item key={index}>
                <IconButton
                  component={Link}
                  href={social.url}
                  target="_blank"
                  sx={{ 
                    color: social.color,
                    p: 3,
                    fontSize: '2rem',
                    transition: 'all 0.3s ease-in-out',
                    '& svg': {
                      fontSize: '2rem',
                    },
                    '&:hover': {
                      transform: 'scale(1.2)',
                      color: '#ffffff',
                      background: `${social.color}20`,
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              </Grid>
            ))}
          </Grid>

          {/* Contact Button */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 2,
                  width: '100%',
                  maxWidth: '600px',
                  alignItems: 'center'
                }}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontSize: '16px',
                      width: '100%',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease-in-out',
                      outline: 'none',
                    }}
                  />
                  <Button
                    variant="contained"
                    startIcon={<EmailIcon />}
                    href="mailto:contact@aibusiness.com"
                    sx={{ 
                      minWidth: '200px',
                      background: 'linear-gradient(145deg, #00c3ff 0%, #00a2ff 100%)',
                      '&:hover': {
                        background: 'linear-gradient(145deg, #00a2ff 0%, #0081ff 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 0 20px rgba(0, 195, 255, 0.6)',
                      },
                    }}
                  >
                    Email Us
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box sx={{ 
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
        py: 6,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                  mb: 2,
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                }}
              >
                AI Business Solutions
              </Typography>
              <Typography
                sx={{
                  color: '#b0b0b0',
                  mb: 2,
                }}
              >
                Empowering businesses with cutting-edge AI technology and custom LLM solutions for tomorrow's challenges.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialMedia.slice(0, 4).map((social, index) => (
                  <IconButton
                    key={index}
                    component={Link}
                    href={social.url}
                    target="_blank"
                    sx={{
                      color: social.color,
                      backgroundColor: `${social.color}20`,
                      '&:hover': {
                        backgroundColor: `${social.color}40`,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="h6"
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                  mb: 2,
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {['About Us', 'Services', 'Projects', 'Contact'].map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: '#b0b0b0',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        color: '#ffffff',
                        transform: 'translateX(5px)',
                      },
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="h6"
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                  mb: 2,
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                }}
              >
                Contact Info
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography sx={{ color: '#b0b0b0' }}>
                  123 AI Street, Tech City, TC 12345
                </Typography>
                <Typography sx={{ color: '#b0b0b0' }}>
                  contact@aibusiness.com
                </Typography>
                <Typography sx={{ color: '#b0b0b0' }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Copyright */}
          <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}>
            <Typography sx={{ color: '#b0b0b0' }}>
              © 2024 AI Business Solutions. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link
                href="#"
                sx={{
                  color: '#b0b0b0',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                sx={{
                  color: '#b0b0b0',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                Terms of Service
              </Link>
            </Box>
            <Typography 
              sx={{ 
                color: '#b0b0b0',
                textAlign: 'center',
                mt: 2,
                fontSize: '0.9rem',
                fontStyle: 'italic',
                background: 'linear-gradient(90deg, #00c3ff, #00a2ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                opacity: 0.8,
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              Made with ❤️ by Satyanarayana
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AILandingPage; 