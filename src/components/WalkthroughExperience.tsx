import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, Compass, Volume2, VolumeX, Maximize2, RotateCcw, AlertTriangle, RefreshCw } from 'lucide-react';

interface SceneInfo {
  id: string;
  name: string;
  range: [number, number]; // [startProgress, endProgress]
  title?: string;
  subtitle?: string;
  description?: string;
  floor: string;
  cameraAngle: string;
}

const SCENES: SceneInfo[] = [
  {
    id: 'elevation',
    name: 'Front Elevation',
    range: [0.0, 0.12],
    title: 'CONTEMPORARY ELEVATION',
    subtitle: 'Scene 01 · Exterior Facade',
    description: 'Complete modern front elevation with textured stone masonry, cedar louvers, and concrete cantilever.',
    floor: 'Exterior Ground',
    cameraAngle: '0° Front Orthographic',
  },
  {
    id: 'entrance',
    name: 'Main Entrance',
    range: [0.12, 0.22],
    title: 'MAIN ENTRANCE PORTAL',
    subtitle: 'Scene 02 & 03 · Entrance Lobby',
    description: 'Grand pivot door opening into an expansive marble threshold and arrival lobby.',
    floor: 'Ground Level · 0.00m',
    cameraAngle: 'Forward Dolly 2.4m/s',
  },
  {
    id: 'stairs',
    name: 'Stair Hall',
    range: [0.22, 0.36],
    title: 'DOUBLE-HEIGHT STAIR HALL',
    subtitle: 'Scene 04 · Vertical Core',
    description: 'A dramatic architectural volume designed around light, movement and space.',
    floor: 'Double Height Atrium · +4.20m',
    cameraAngle: '35° Low-Angle Tilt',
  },
  {
    id: 'drawing',
    name: 'Drawing Room',
    range: [0.36, 0.48],
    title: 'DRAWING ROOM',
    subtitle: 'Scene 05 · Formal Living',
    description: 'A refined living space designed for comfort and elegance.',
    floor: 'Ground Level East Wing',
    cameraAngle: 'Pan Right 45°',
  },
  {
    id: 'dining',
    name: 'Dining Area',
    range: [0.48, 0.58],
    title: 'DINING',
    subtitle: 'Scene 06 · Central Social Space',
    description: 'A connected social space between living and family areas.',
    floor: 'Central Core',
    cameraAngle: 'Central Perspective',
  },
  {
    id: 'lounge',
    name: 'Family Lounge',
    range: [0.58, 0.68],
    title: 'FAMILY LOUNGE',
    subtitle: 'Scene 07 · Informal Living',
    description: 'A contemporary space for everyday family living.',
    floor: 'Main Living Level',
    cameraAngle: 'Wide 24mm Focal Depth',
  },
  {
    id: 'kitchen',
    name: 'Modern Kitchen',
    range: [0.68, 0.78],
    title: 'MODERN KITCHEN',
    subtitle: 'Scene 08 · Gourmet Culinary Space',
    description: 'Functional planning with a clean contemporary aesthetic.',
    floor: 'Ground Level West Wing',
    cameraAngle: 'Island Tracking Arc',
  },
  {
    id: 'bedroom1',
    name: 'Bedroom 1',
    range: [0.78, 0.88],
    title: 'PRIVATE RETREAT',
    subtitle: 'Scene 09 & 10 · Master Suite',
    description: 'A calm and refined private living space.',
    floor: 'Private Wing',
    cameraAngle: 'Lateral Glide',
  },
  {
    id: 'bath1',
    name: 'Bathroom 1',
    range: [0.88, 0.93],
    title: 'MODERN BATHROOM',
    subtitle: 'Scene 11 · Ensuite 01',
    description: 'Premium materials, clean lines and functional planning.',
    floor: 'Ensuite 01',
    cameraAngle: 'Vanity Detail View',
  },
  {
    id: 'bedroom2',
    name: 'Bedroom 2',
    range: [0.93, 0.97],
    title: 'COMFORT & PRIVACY',
    subtitle: 'Scene 12 & 13 · Guest Suite',
    description: 'Thoughtfully planned residential space.',
    floor: 'Guest Wing',
    cameraAngle: 'Interior Oblique',
  },
  {
    id: 'bath2',
    name: 'Bathroom 2',
    range: [0.97, 1.0],
    title: 'MODERN BATHROOM',
    subtitle: 'Scene 14 · Ensuite 02',
    description: 'Premium materials, clean lines and functional planning.',
    floor: 'Ensuite 02',
    cameraAngle: 'Full Depth Composition',
  },
];

export const WalkthroughExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ambientNodeRef = useRef<GainNode | null>(null);

  // States
  const [progress, setProgress] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeScene, setActiveScene] = useState<SceneInfo>(SCENES[0]);
  const [showTapFallback, setShowTapFallback] = useState(false);

  // Interpolation refs
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const isSeekingRef = useRef(false);

  // Determine active scene based on progress
  useEffect(() => {
    const scene = SCENES.find(
      (s) => progress >= s.range[0] && progress <= s.range[1]
    ) || SCENES[0];
    setActiveScene(scene);
  }, [progress]);

  // Video event verification helper
  const verifyVideoReady = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Number.isFinite(video.duration) && video.duration > 0) {
      setIsVideoReady(true);
      setIsLoading(false);
      setVideoError(null);
      setShowTapFallback(false);

      // Ensure video is paused so scroll controls playback
      video.pause();

      // Sync initial position
      if (video.currentTime === 0 && targetProgressRef.current > 0) {
        video.currentTime = targetProgressRef.current * video.duration;
      }
    }
  }, []);

  // Initialize and attach video lifecycle event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      verifyVideoReady();
    };

    const handleLoadedData = () => {
      verifyVideoReady();
    };

    const handleCanPlay = () => {
      verifyVideoReady();
    };

    const handleCanPlayThrough = () => {
      verifyVideoReady();
    };

    const handleWaiting = () => {
      // Browser is buffering, do not permanently block UI
    };

    const handleStalled = () => {
      console.warn('3D Walkthrough video download stalled');
    };

    const handleProgress = () => {
      if (!isVideoReady) {
        verifyVideoReady();
      }
    };

    const handleError = () => {
      const err = video.error;
      let errMsg = 'Unknown media error';
      if (err) {
        switch (err.code) {
          case MediaError.MEDIA_ERR_ABORTED:
            errMsg = 'MEDIA_ERR_ABORTED: Video playback aborted by client';
            break;
          case MediaError.MEDIA_ERR_NETWORK:
            errMsg = 'MEDIA_ERR_NETWORK: Network error downloading video stream';
            break;
          case MediaError.MEDIA_ERR_DECODE:
            errMsg = 'MEDIA_ERR_DECODE: Video decode error in browser';
            break;
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            errMsg = 'MEDIA_ERR_SRC_NOT_SUPPORTED: Video format or source path not supported';
            break;
          default:
            errMsg = `MediaError code ${err.code}: ${err.message || 'Error loading video'}`;
        }
      }
      console.error('3D Walkthrough video failed to load:', errMsg, err);
      setVideoError(errMsg);
      setIsLoading(false);
      setShowTapFallback(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('stalled', handleStalled);
    video.addEventListener('progress', handleProgress);
    video.addEventListener('error', handleError);

    // Initial check in case video is already cached/ready
    if (video.readyState >= 1) {
      verifyVideoReady();
    }

    // Force browser to initiate loading
    try {
      video.load();
    } catch (e) {
      console.warn('Video load invocation warning:', e);
    }

    // Safe timeout to eradicate infinite "INITIALIZING" state
    const timeoutTimer = setTimeout(() => {
      if (video.readyState >= 1 && Number.isFinite(video.duration) && video.duration > 0) {
        setIsVideoReady(true);
        setIsLoading(false);
      } else {
        // Stop blocking loading screen after 2.5s
        setIsLoading(false);
        setShowTapFallback(true);
      }
    }, 2500);

    return () => {
      clearTimeout(timeoutTimer);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('stalled', handleStalled);
      video.removeEventListener('progress', handleProgress);
      video.removeEventListener('error', handleError);
    };
  }, [verifyVideoReady, isVideoReady]);

  // Handle manual retry or tap-to-load
  const handleManualLoad = () => {
    setIsLoading(true);
    setShowTapFallback(false);
    setVideoError(null);

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.playsInline = true;
      video.load();
      video
        .play()
        .then(() => {
          video.pause();
          verifyVideoReady();
        })
        .catch((e) => {
          console.warn('Manual video play/pause primed:', e);
          verifyVideoReady();
        });
    }
  };

  // Scroll listener mapping sticky container to 0..1 progress
  const handleScroll = useCallback(() => {
    if (isAutoPlaying || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const totalScrollableDistance = rect.height - window.innerHeight;

    if (totalScrollableDistance <= 0) return;

    const scrolled = -rect.top;
    const rawProgress = scrolled / totalScrollableDistance;
    const clampedProgress = Math.max(0, Math.min(1, rawProgress));

    targetProgressRef.current = clampedProgress;
  }, [isAutoPlaying]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Smooth animation frame loop for scroll interpolation
  useEffect(() => {
    const updateLoop = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      if (isAutoPlaying) {
        // Continuous auto-tour over ~13 seconds
        targetProgressRef.current = (targetProgressRef.current + dt / 13) % 1;
      }

      // Smooth lerp (factor 0.15 gives immediate responsive feel without stutter)
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.15;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      const p = currentProgressRef.current;
      setProgress(p);

      // Check duration before calculating currentTime (Section 7 Requirement)
      const video = videoRef.current;
      if (video && Number.isFinite(video.duration) && video.duration > 0) {
        const targetTime = p * video.duration;

        // Avoid changing currentTime hundreds of times unnecessarily if delta is minute
        if (Math.abs(video.currentTime - targetTime) > 0.025 && !isSeekingRef.current) {
          isSeekingRef.current = true;
          video.currentTime = targetTime;
          // Release seek lock on seeked or fast tick
          const onSeeked = () => {
            isSeekingRef.current = false;
            video.removeEventListener('seeked', onSeeked);
          };
          video.addEventListener('seeked', onSeeked, { once: true });
        }
      }

      animationFrameRef.current = requestAnimationFrame(updateLoop);
    };

    animationFrameRef.current = requestAnimationFrame(updateLoop);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Jump to specific architectural room
  const jumpToScene = (scene: SceneInfo) => {
    const midPoint = (scene.range[0] + scene.range[1]) / 2;
    targetProgressRef.current = midPoint;

    if (!isAutoPlaying && containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const totalScrollableDistance =
        containerRef.current.offsetHeight - window.innerHeight;
      const targetScrollY = containerTop + midPoint * totalScrollableDistance;
      window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    }
  };

  // Toggle ambient acoustic drone
  const toggleAudio = () => {
    if (isMuted) {
      try {
        if (!audioCtxRef.current) {
          const AudioContextClass =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext })
              .webkitAudioContext;
          const ctx = new AudioContextClass();
          audioCtxRef.current = ctx;

          const osc1 = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          const gain = ctx.createGain();

          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(55, ctx.currentTime);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(260, ctx.currentTime);

          gain.gain.setValueAtTime(0.04, ctx.currentTime);

          osc1.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc1.start();
          ambientNodeRef.current = gain;
        } else if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }

        if (ambientNodeRef.current && audioCtxRef.current) {
          ambientNodeRef.current.gain.setTargetAtTime(
            0.04,
            audioCtxRef.current.currentTime,
            0.2
          );
        }
        setIsMuted(false);
      } catch (e) {
        console.warn('Audio init:', e);
      }
    } else {
      if (ambientNodeRef.current && audioCtxRef.current) {
        ambientNodeRef.current.gain.setTargetAtTime(
          0.0001,
          audioCtxRef.current.currentTime,
          0.1
        );
      }
      setIsMuted(true);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <section
      id="walkthrough-section"
      ref={containerRef}
      className="relative w-full bg-[#080b10]"
      style={{ height: '650vh' }}
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* REAL HTML5 VIDEO ELEMENT */}
          <video
            ref={videoRef}
            src="/walkthrough.mp4"
            poster="/walkthrough-poster.jpg"
            preload="auto"
            muted
            playsInline
            controls={false}
            className="w-full h-full object-cover object-center select-none pointer-events-none will-change-transform"
          />

          {/* Fallback image when video has not loaded or error */}
          {(!isVideoReady || videoError) && (
            <img
              src="/walkthrough-poster.jpg"
              alt="Design Links Architectural House Walkthrough"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            />
          )}

          {/* Proper Transient Loading Indicator (Disappears automatically when ready) */}
          {isLoading && !isVideoReady && (
            <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center text-center p-6 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-full border-2 border-[#ea580c] border-t-transparent animate-spin mb-3" />
              <span className="text-xs uppercase tracking-widest text-white font-semibold font-mono-numbers">
                LOADING 3D WALKTHROUGH
              </span>
              <span className="text-[11px] text-stone-400 mt-1">
                Optimizing high-definition architectural frames...
              </span>
            </div>
          )}

          {/* Non-blocking Tap-to-Load Fallback if auto-loading stalled */}
          {showTapFallback && !isVideoReady && !isLoading && (
            <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
              <button
                onClick={handleManualLoad}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ea580c] hover:bg-[#d94e08] text-white text-xs font-bold uppercase tracking-wider shadow-xl transition-all cursor-pointer animate-pulse"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Tap to activate 3D walkthrough video</span>
              </button>
              {videoError && (
                <span className="text-[10px] text-red-300 bg-red-950/80 px-2 py-0.5 rounded mt-1.5 border border-red-500/40">
                  {videoError}
                </span>
              )}
            </div>
          )}

          {/* Vignette & Contrast Scrims */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-black/20 to-black/60" />
          <div className="absolute inset-0 pointer-events-none bg-radial from-transparent via-black/10 to-black/60" />

          {/* Architectural HUD Overlay */}
          <div className="absolute top-20 md:top-24 left-6 md:left-12 z-20 pointer-events-none flex flex-col">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ea580c] font-semibold mb-1 font-mono-numbers">
              <span className="inline-block w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
              <span>SCROLL-CONTROLLED 3D WALKTHROUGH</span>
            </div>
            <div className="text-xs text-white/70 font-mono-numbers flex items-center gap-3">
              <span>{activeScene.floor}</span>
              <span className="text-white/30">|</span>
              <span>{activeScene.cameraAngle}</span>
              <span className="text-white/30">|</span>
              <span className="text-[#ea580c] font-bold">
                {Math.round(progress * 100)}% JOURNEY
              </span>
            </div>
          </div>

          {/* Top Right Quick Controls */}
          <div className="absolute top-20 md:top-24 right-6 md:right-12 z-30 flex items-center gap-2">
            {/* Auto Play / Scroll Sync Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white hover:border-[#ea580c] hover:bg-black/80 transition-colors cursor-pointer"
              title={isAutoPlaying ? 'Switch to Scroll Mode' : 'Play Cinematic Auto-Tour'}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#ea580c]" />
                  <span className="hidden sm:inline">Pause Tour</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#ea580c] fill-[#ea580c]" />
                  <span className="hidden sm:inline">Auto Tour</span>
                </>
              )}
            </button>

            {/* Ambient Soundscape */}
            <button
              onClick={toggleAudio}
              className="p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
              title={isMuted ? 'Enable Ambient Spatial Sound' : 'Mute Sound'}
              aria-label="Sound Toggle"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-stone-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#ea580c]" />
              )}
            </button>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-colors hidden sm:block cursor-pointer"
              title="Toggle Fullscreen"
              aria-label="Fullscreen Toggle"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Synchronized Spatial Description Card */}
          <div className="absolute bottom-28 md:bottom-28 left-6 md:left-12 max-w-xl z-20 pointer-events-none transition-all duration-300 transform">
            <div className="p-4 md:p-6 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono-numbers uppercase tracking-wider text-[#ea580c] font-semibold">
                  {activeScene.subtitle}
                </span>
                <span className="text-white/40">·</span>
                <span className="text-[11px] text-stone-300 font-mono-numbers">
                  Design Links Architecture
                </span>
              </div>
              <h3 className="text-xl md:text-3xl font-extrabold text-white tracking-tight font-display mb-2">
                {activeScene.title}
              </h3>
              <p className="text-xs md:text-sm text-stone-300 leading-relaxed max-w-lg">
                {activeScene.description}
              </p>
            </div>
          </div>

          {/* Interactive Room Navigation Timeline & Progress Scrubber */}
          <div className="absolute bottom-6 left-4 right-4 md:left-12 md:right-12 z-30">
            <div className="flex flex-col gap-2">
              {/* Timeline Room Marker Tabs */}
              <div className="hidden lg:flex items-center justify-between gap-1 overflow-x-auto pb-1 select-none">
                {SCENES.map((scene) => {
                  const isActive = activeScene.id === scene.id;
                  return (
                    <button
                      key={scene.id}
                      onClick={() => jumpToScene(scene)}
                      className={`px-2.5 py-1 text-[11px] font-medium transition-all duration-200 rounded-md whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-[#ea580c] text-white shadow-sm font-semibold'
                          : 'bg-black/50 text-stone-300 hover:text-white hover:bg-black/80 border border-white/10'
                      }`}
                    >
                      {scene.name}
                    </button>
                  );
                })}
              </div>

              {/* Progress Track Slider */}
              <div className="relative w-full flex items-center">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.001"
                  value={progress}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    targetProgressRef.current = val;
                  }}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#ea580c]"
                  aria-label="Walkthrough timeline progress"
                />
              </div>

              {/* Mobile room status indicator */}
              <div className="flex lg:hidden items-center justify-between text-xs text-stone-300 mt-1">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#ea580c]" />
                  {activeScene.name}
                </span>
                <span className="font-mono-numbers text-[11px] text-[#ea580c]">
                  {Math.round(progress * 100)}% Complete
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
