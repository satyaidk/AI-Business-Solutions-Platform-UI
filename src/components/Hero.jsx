import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Alert,
  Fade,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components for animated elements
const FloatingElement = styled(Box)(({ delay = 0 }) => ({
  position: 'absolute',
  width: '60px',
  height: '60px',
  background: 'linear-gradient(135deg, #0066ff, #00c3ff)',
  borderRadius: '50%',
  filter: 'blur(30px)',
  opacity: 0.3,
  animation: 'float 6s ease-in-out infinite',
  animationDelay: `${delay}s`,
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translate(0, 0) scale(1)',
    },
    '50%': {
      transform: 'translate(20px, -20px) scale(1.1)',
    },
  },
}));

const NeonLine = styled(Box)(() => ({
  position: 'absolute',
  height: '1px',
  background: 'linear-gradient(90deg, transparent, #0066ff, transparent)',
  width: '100%',
  opacity: 0.3,
  animation: 'pulse 2s ease-in-out infinite',
  '@keyframes pulse': {
    '0%, 100%': {
      opacity: 0.3,
    },
    '50%': {
      opacity: 0.6,
    },
  },
}));

const GlowingButton = styled(Button)(() => ({
  background: 'rgba(0, 102, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(0, 195, 255, 0.2)',
  color: '#fff',
  padding: '12px 24px',
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '1rem',
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: 'rgba(0, 102, 255, 0.2)',
    borderColor: '#0066ff',
    transform: 'translateY(-2px)',
    boxShadow: '0 0 20px rgba(0, 102, 255, 0.4)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    background: 'linear-gradient(45deg, #0066ff, #00c3ff, #0066ff)',
    backgroundSize: '200% 200%',
    width: 'calc(100% + 4px)',
    height: 'calc(100% + 4px)',
    zIndex: -1,
    animation: 'border-animation 2s linear infinite',
    borderRadius: '12px',
  },
  '@keyframes border-animation': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '100%': {
      backgroundPosition: '200% 50%',
    },
  },
}));

const LoadingButton = styled(GlowingButton)(({ loading }) => ({
  position: 'relative',
  '& .loading-overlay': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 102, 255, 0.2)',
    backdropFilter: 'blur(4px)',
    borderRadius: '12px',
    opacity: loading ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    pointerEvents: loading ? 'auto' : 'none',
  },
}));

const Hero = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = async () => {
    setIsLoading(true);
    // Simulate loading and preload the main page
    try {
      // Add a minimum delay for the loading animation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate to the main page
      navigate('/ai-landing');
    } catch (error) {
      console.error('Navigation error:', error);
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.1) 0%, transparent 50%)',
          zIndex: 1,
        },
      }}
    >
      {/* Animated background elements */}
      <FloatingElement sx={{ top: '10%', left: '10%' }} />
      <FloatingElement sx={{ top: '60%', right: '15%' }} delay={1} />
      <FloatingElement sx={{ bottom: '20%', left: '20%' }} delay={2} />
      
      {/* Neon lines */}
      <NeonLine sx={{ top: '30%' }} />
      <NeonLine sx={{ bottom: '40%' }} />

      {/* Code-like background elements */}
      <Box
        sx={{
          position: 'absolute',
          right: '5%',
          top: '20%',
          opacity: 0.1,
          color: '#0066ff',
          fontFamily: 'monospace',
          animation: 'fade 4s ease-in-out infinite',
          '@keyframes fade': {
            '0%, 100%': { opacity: 0.1 },
            '50%': { opacity: 0.2 },
          },
        }}
      >
        {Array(10).fill('').map((_, i) => (
          <Typography key={i} variant="body2">
            {'{'.repeat(i)} AI_Model.train() {'}'.repeat(i)}
          </Typography>
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 700,
                color: '#fff',
                mb: 2,
                position: 'relative',
                '& .highlight': {
                  color: '#0066ff',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    background: '#0066ff',
                    filter: 'blur(20px)',
                    opacity: 0.3,
                    zIndex: -1,
                  },
                },
              }}
            >
              The <span className="highlight">AI</span> Revolution Starts Here
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 4,
                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                maxWidth: '600px',
              }}
            >
              Empowering the future with advanced artificial intelligence solutions
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
              <LoadingButton
                onClick={handleGetStarted}
                disabled={isLoading}
                loading={isLoading}
              >
                {isLoading ? 'Loading...' : 'Get Started'}
                <Box className="loading-overlay">
                  <CircularProgress
                    size={24}
                    sx={{
                      color: '#fff',
                      opacity: 0.8,
                    }}
                  />
                </Box>
              </LoadingButton>
              <Fade in={showAlert}>
                <Alert
                  severity="info"
                  sx={{
                    background: 'rgba(0, 102, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 195, 255, 0.2)',
                    color: '#fff',
                    mt: 2,
                    width: { xs: '100%', sm: 'auto' },
                    '& .MuiAlert-icon': {
                      color: '#0066ff',
                    },
                  }}
                  onClose={() => setShowAlert(false)}
                >
                  Click the "Get Started" button to explore our AI solutions!
                </Alert>
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Floating badges/elements */}
      <Box
        sx={{
          position: { xs: 'relative', md: 'absolute' },
          right: { xs: 'auto', md: '10%' },
          top: { xs: 'auto', md: '30%' },
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          zIndex: 2,
          width: { xs: '100%', md: 'auto' },
          alignItems: { xs: 'center', md: 'flex-start' },
          mt: { xs: 4, md: 0 },
          mb: { xs: 4, md: 0 },
        }}
      >
        {['Build', 'Optimize', 'Scale'].map((text, index) => (
          <Box
            key={text}
            sx={{
              background: 'rgba(0, 102, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 195, 255, 0.2)',
              borderRadius: '12px',
              padding: '8px 16px',
              color: '#fff',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              transform: `translateX(${index * 20}px)`,
              animation: 'float-badge 4s ease-in-out infinite',
              animationDelay: `${index * 0.5}s`,
              '@keyframes float-badge': {
                '0%, 100%': {
                  transform: `translateX(${index * 20}px) translateY(0)`,
                },
                '50%': {
                  transform: `translateX(${index * 20}px) translateY(-10px)`,
                },
              },
              '@media (max-width: 900px)': {
                transform: 'none',
                '@keyframes float-badge': {
                  '0%, 100%': {
                    transform: 'translateY(0)',
                  },
                  '50%': {
                    transform: 'translateY(-10px)',
                  },
                },
              },
            }}
          >
            {text}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Hero; 