---
description: Generate voiceovers, podcasts, background music, and audio content
---

# 🎵 Audio Creator Skill

## What This Skill Does
Creates audio content: AI voiceovers, podcast segments, background music,
and sound effects. Handles text-to-speech, music generation, and audio mixing.

## When to Use
- "Create a voiceover for this script"
- "Generate background music for my video"
- "Create a podcast intro"
- "Transcribe this audio file"

## Instructions for the Agent

### Voiceover (Text-to-Speech)
**Tool**: ElevenLabs or OpenAI TTS
```
Input:  Script text + voice settings (speed, tone, accent)
Output: MP3/WAV audio file
```
**Voice Settings Guide:**
| Use Case | Voice | Speed | Tone |
|---|---|---|---|
| Explainer video | Professional male/female | 1.0x | Confident |
| Podcast intro | Warm, deep voice | 0.9x | Welcoming |
| Ad/promo | Energetic voice | 1.1x | Exciting |
| Tutorial | Calm, clear voice | 0.95x | Instructional |

### Background Music
**Tool**: Suno AI or Udio
```
Prompt: "[Genre] instrumental, [mood], [tempo] BPM, no vocals,
         suitable for [use case], [duration] long"
```
**Genre Presets:**
| Use Case | Prompt Addition |
|---|---|
| Tech explainer | "ambient electronic, minimal, 90 BPM" |
| Motivational | "uplifting cinematic, orchestral, 120 BPM" |
| Chill/casual | "lo-fi hip hop, relaxing, 75 BPM" |
| Corporate | "soft acoustic guitar, professional, 100 BPM" |

### Audio Mixing (FFmpeg)
Combine voiceover with background music:
```bash
# Lower music volume and mix with voice
ffmpeg -i voice.mp3 -i music.mp3 \
  -filter_complex "[1:a]volume=0.15[bg];[0:a][bg]amix=inputs=2:duration=first" \
  -c:a libmp3lame mixed_output.mp3
```

### Transcription (Speech-to-Text)
**Tool**: Whisper (local, free)
```bash
whisper audio_file.mp3 --model medium --language en --output_format srt
```

## Quality Rules
1. Always preview audio before finalizing
2. Background music should be at 10-20% volume behind voice
3. Leave 0.5s silence at start and end
4. Normalize audio levels (-16 LUFS for podcast, -14 LUFS for YouTube)
5. Export as MP3 (192kbps) for web, WAV for editing
