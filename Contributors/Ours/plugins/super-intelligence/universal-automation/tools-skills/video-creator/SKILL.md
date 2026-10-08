---
description: Create short-form and long-form video content with AI tools
---

# 🎬 Video Creator Skill

## What This Skill Does
Orchestrates the creation of video content using a pipeline of AI tools:
script writing → visual generation → voiceover → assembly → subtitles.

## When to Use
- "Create a 60-second explainer about [topic]"
- "Make a YouTube Short about [topic]"
- "Turn this blog post into a video"
- "Create a product demo video"

## Instructions for the Agent

### Step 1: Script Generation
Write a script with this structure:
```
SCENE 1 (0:00 - 0:05): Hook
  Visual: [description]
  Narration: "[spoken text]"

SCENE 2 (0:05 - 0:15): Problem
  Visual: [description]
  Narration: "[spoken text]"

SCENE 3 (0:15 - 0:40): Solution
  Visual: [description]
  Narration: "[spoken text]"

SCENE 4 (0:40 - 0:55): Proof/Demo
  Visual: [description]
  Narration: "[spoken text]"

SCENE 5 (0:55 - 1:00): CTA
  Visual: [description]
  Narration: "[spoken text]"
```

### Step 2: Visual Generation (per scene)
Use AI image/video tools for each scene's visual.
- **Static visuals**: DALL-E / Midjourney / Flux
- **Animated visuals**: Runway ML / Pika
- **Screen recordings**: OBS or screenshot sequences
- **Avatar/talking head**: HeyGen / Synthesia

### Step 3: Voiceover
- **AI Voice**: ElevenLabs API or OpenAI TTS
- **Settings**: Natural pace, professional tone
- **Format**: MP3, one file per scene or one continuous file

### Step 4: Assembly
Use FFmpeg to combine visuals + audio:
```bash
# Example: Combine image + audio into video
ffmpeg -loop 1 -i scene1.png -i scene1_audio.mp3 \
  -c:v libx264 -tune stillimage -c:a aac \
  -shortest scene1.mp4

# Concatenate all scenes
ffmpeg -f concat -i filelist.txt -c copy final_video.mp4
```

### Step 5: Subtitles
- Transcribe with Whisper (local or API)
- Generate SRT file
- Burn subtitles into video:
```bash
ffmpeg -i final_video.mp4 -vf subtitles=subs.srt output_with_subs.mp4
```

### Step 6: Export Specs
| Platform | Ratio | Max Duration | Resolution |
|---|---|---|---|
| YouTube Shorts | 9:16 | 60s | 1080x1920 |
| Instagram Reels | 9:16 | 90s | 1080x1920 |
| TikTok | 9:16 | 3 min | 1080x1920 |
| YouTube Long | 16:9 | 12 hrs | 1920x1080 |
| LinkedIn | 16:9 or 1:1 | 10 min | 1920x1080 |
| Twitter/X | 16:9 | 2:20 min | 1920x1080 |

## Tools Required
| Tool | Purpose | Cost |
|---|---|---|
| FFmpeg | Video assembly, encoding | Free (local) |
| Whisper | Speech-to-text / subtitles | Free (local) |
| ElevenLabs | AI voiceover | $5/mo starter |
| Runway ML | AI video generation | $12/mo starter |
| DALL-E | Scene visuals | Pay per use |

## Quality Rules
1. Hook must be in the first 3 seconds
2. Subtitles are mandatory (85% of social video is watched muted)
3. Keep shorts under 60 seconds
4. End with a clear CTA
5. Use jump cuts, not long static shots
