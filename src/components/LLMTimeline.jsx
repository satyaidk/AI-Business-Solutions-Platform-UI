import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import {
  Science as ResearchIcon,
  Build as PreTrainingIcon,
  Tune as FineTuningIcon,
  BugReport as TestingIcon,
  Speed as OptimizationIcon,
  RocketLaunch as DeploymentIcon,
  Refresh as ImprovementIcon,
} from '@mui/icons-material';

const timelineData = [
  {
    title: 'Research & Planning',
    icon: <ResearchIcon />,
    activities: [
      'Define objectives and use cases',
      'Determine model architecture',
      'Data collection strategy',
      'Hardware and infrastructure planning',
      'Select baseline models',
    ],
    tools: [
      'Research papers (arXiv, OpenAI, DeepMind)',
      'Datasets (Common Crawl, Wikipedia)',
      'Compute resources (AWS, Google Cloud TPUs)',
    ],
  },
  {
    title: 'Pre-training the Base Model',
    icon: <PreTrainingIcon />,
    activities: [
      'Collect and preprocess data',
      'Choose tokenization strategy',
      'Define model architecture',
      'Train on large-scale unsupervised data',
      'Implement optimizations',
    ],
    tools: [
      'PyTorch, TensorFlow, JAX',
      'Hugging Face Transformers',
      'DeepSpeed, Megatron-LM',
      'Weights & Biases, TensorBoard',
    ],
  },
  {
    title: 'Fine-tuning on Domain-Specific Data',
    icon: <FineTuningIcon />,
    activities: [
      'Use task-specific datasets',
      'Implement supervised fine-tuning',
      'Apply RLHF techniques',
      'Use LoRA or QLoRA for efficiency',
      'Conduct few-shot learning experiments',
    ],
    tools: [
      'Hugging Face PEFT',
      'DeepSpeed ZeRO',
      'PPO, TRL',
      'Domain-specific datasets',
    ],
  },
  {
    title: 'Testing & Evaluation',
    icon: <TestingIcon />,
    activities: [
      'Evaluate on NLP benchmarks',
      'Use automated metrics',
      'Conduct human evaluations',
      'Test adversarial robustness',
      'Assess hallucination rates',
    ],
    tools: [
      'LM Evaluation Harness',
      'AIF360, Fairness Indicators',
      'Red-teaming tools',
    ],
  },
  {
    title: 'Optimization & Deployment Preparation',
    icon: <OptimizationIcon />,
    activities: [
      'Optimize model inference',
      'Deploy on scalable infrastructure',
      'Implement inference pipelines',
      'Ensure security measures',
      'Establish content moderation',
    ],
    tools: [
      'ONNX, TensorRT',
      'FastAPI, TorchServe',
      'Kubernetes, AWS SageMaker',
      'Prometheus, Grafana',
    ],
  },
  {
    title: 'Deployment & Continuous Monitoring',
    icon: <DeploymentIcon />,
    activities: [
      'Deploy API endpoints',
      'Scale using cloud services',
      'Implement feedback loops',
      'Automate versioning',
      'Monitor drift detection',
    ],
    tools: [
      'GitHub Actions, MLflow',
      'FastAPI, Flask',
      'Datadog, Prometheus',
    ],
  },
  {
    title: 'Continuous Improvement & Iteration',
    icon: <ImprovementIcon />,
    activities: [
      'Gather user feedback',
      'Fine-tune iteratively',
      'Conduct security audits',
      'Integrate newer datasets',
    ],
    tools: [
      'Human-in-the-loop platforms',
      'Snorkel, Label Studio',
      'AutoML, MLflow',
      'Airflow',
    ],
  },
];

const TimelineItem = ({ data }) => {
  return (
    <Grid item xs={12} md={6}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 3 },
          height: '100%',
          position: 'relative',
          background: 'linear-gradient(145deg, #0f0f0f 0%, #1a1a1a 100%)',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#ffffff',
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
            boxShadow: '0 0 20px rgba(0, 255, 153, 0.6)',
            border: '1px solid rgba(0, 255, 153, 0.3)',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              background: 'linear-gradient(145deg, #00ff99 0%, #00ccff 100%)',
              color: '#0f0f0f',
              borderRadius: '50%',
              p: { xs: 0.5, md: 1 },
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '32px', md: '40px' },
              height: { xs: '32px', md: '40px' },
              boxShadow: '0 0 15px rgba(0, 255, 153, 0.5)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: '0 0 20px rgba(0, 255, 153, 0.8)',
              },
            }}
          >
            {data.icon}
          </Box>
          <Typography 
            variant="h6" 
            component="h3"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 600,
              color: '#ffffff',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
            }}
          >
            {data.title}
          </Typography>
        </Box>
        <Typography 
          variant="subtitle1" 
          sx={{
            fontSize: { xs: '0.9rem', md: '1rem' },
            color: '#00ff99',
            fontWeight: 500,
            mb: 1,
            textShadow: '0 0 10px rgba(0, 255, 153, 0.2)',
          }}
        >
          Key Activities:
        </Typography>
        <List dense sx={{ py: 0 }}>
          {data.activities.map((activity, idx) => (
            <ListItem key={idx} sx={{ py: 0.5 }}>
              <ListItemText 
                primary={activity}
                primaryTypographyProps={{
                  sx: { 
                    fontSize: { xs: '0.85rem', md: '0.875rem' },
                    color: '#b0b0b0',
                    transition: 'color 0.3s ease-in-out',
                    '&:hover': {
                      color: '#ffffff',
                    },
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Typography 
          variant="subtitle1" 
          sx={{
            fontSize: { xs: '0.9rem', md: '1rem' },
            color: '#00ff99',
            fontWeight: 500,
            mb: 1,
            textShadow: '0 0 10px rgba(0, 255, 153, 0.2)',
          }}
        >
          Tools & Technologies:
        </Typography>
        <List dense sx={{ py: 0 }}>
          {data.tools.map((tool, idx) => (
            <ListItem key={idx} sx={{ py: 0.5 }}>
              <ListItemText 
                primary={tool}
                primaryTypographyProps={{
                  sx: { 
                    fontSize: { xs: '0.85rem', md: '0.875rem' },
                    color: '#b0b0b0',
                    transition: 'color 0.3s ease-in-out',
                    '&:hover': {
                      color: '#ffffff',
                    },
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Grid>
  );
};

const LLMTimeline = () => {
  return (
    <Box sx={{ 
      py: { xs: 4, md: 8 }, 
      background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
      minHeight: '100vh',
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          sx={{ 
            mb: { xs: 3, md: 6 }, 
            textAlign: 'center',
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            color: '#ffffff',
            fontWeight: 700,
            textShadow: '0 0 20px rgba(0, 255, 153, 0.3)',
          }}
        >
          Large Language Models Development Guide
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ 
            mb: { xs: 3, md: 6 }, 
            textAlign: 'center', 
            maxWidth: '800px', 
            mx: 'auto',
            fontSize: { xs: '0.9rem', md: '1rem' },
            px: { xs: 2, md: 0 },
            color: '#b0b0b0',
          }}
        >
          Developing an LLM is a multi-stage process, from defining objectives to full-scale deployment.
          Here's a structured hierarchy with essential details at each stage:
        </Typography>
        <Grid container spacing={{ xs: 4, md: 4 }}>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} data={item} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LLMTimeline; 