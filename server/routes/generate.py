
# pip install diffusers==0.11.1

# !pip install transformers
# !pip install setuptools-rust

import sys
from diffusers import StableDiffusionPipeline
import torch

# Check if at least one argument is provided
if len(sys.argv) < 2:
    print("Usage: python script.py 'prompt text'")
    sys.exit(1)

# Get the prompt from the command-line arguments
prompt = ' '.join(sys.argv[1:])

pipeline = StableDiffusionPipeline.from_pretrained("MohamedRashad/diffusion_fashion", torch_dtype=torch.float16)
pipeline.to("cuda")

images = pipeline(prompt).images[0]
images.save("output.png")
