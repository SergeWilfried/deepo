import { BarVisualizer, useVoiceAssistant } from "@livekit/components-react";
import {
  Search,
  Sparkles,
  TrendingUp,
  Brain,
  Rocket,
  Code,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";

const RESEARCH_SUGGESTIONS = [
  {
    icon: Brain,
    title: "IA & Apprentissage Automatique",
    topic: "Dernières avancées des grands modèles de langage et des transformers",
    color: "fgAccent1",
    bgColor: "bgAccent1",
  },
  {
    icon: Rocket,
    title: "Technologie Spatiale",
    topic: "Percées récentes dans l'exploration spatiale commerciale",
    color: "fgModerate",
    bgColor: "bgModerate1",
  },
  {
    icon: Code,
    title: "Développement Web",
    topic: "Frameworks frontend modernes et comparaisons de performances",
    color: "fgSuccess",
    bgColor: "bgSuccess1",
  },
  {
    icon: TrendingUp,
    title: "Informatique Quantique",
    topic: "État actuel des applications de l'informatique quantique",
    color: "fgAccent2",
    bgColor: "bgAccent2",
  },
  {
    icon: Lightbulb,
    title: "Énergie Propre",
    topic: "Innovations en énergie renouvelable et technologie des batteries",
    color: "fgCaution1",
    bgColor: "bgCaution1",
  },
  {
    icon: Sparkles,
    title: "Biotechnologie",
    topic: "Développements récents de CRISPR et de l'édition génétique",
    color: "fgAccent1",
    bgColor: "bgAccent1",
  },
];

export function EmptyState() {
  // Use useVoiceAssistant to get agent audio track
  const { state: agentState, audioTrack } = useVoiceAssistant();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center justify-center py-20 px-6">
      <div className="flex flex-col items-center gap-8 max-w-4xl w-full">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-bgAccent1/20 border border-fgAccent1/30 flex items-center justify-center">
          <Search className="w-8 h-8 text-fgAccent1" />
        </div>

        {/* Audio Visualizer */}
        <div className="h-[150px] w-full max-w-xs bg-transparent">
          {audioTrack ? (
            <BarVisualizer
              state={agentState}
              barCount={5}
              trackRef={audioTrack}
              className="agent-visualizer"
              options={{ minHeight: 16 }}
            />
          ) : (
            <div className="agent-visualizer">
              <div className="flex items-center justify-center h-full text-fg3 text-sm">
                En attente de l&apos;agent...
              </div>
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="text-base font-semibold text-fg0">
            Prêt à rechercher
          </h3>
          <p className="text-sm text-fg3 leading-relaxed">
            Démarrez une recherche avec des commandes vocales, ou essayez l&apos;un de ces
            sujets :
          </p>
        </div>

        {/* Research Suggestions */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {RESEARCH_SUGGESTIONS.map((suggestion, index) => {
            const Icon = suggestion.icon;
            const isHovered = hoveredIndex === index;

            return (
              <button
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  group relative flex items-start gap-3 p-4 
                  rounded-lg border transition-all duration-200
                  ${
                    isHovered
                      ? `bg-${suggestion.bgColor}/20 border-${suggestion.color}/40 scale-[1.02]`
                      : "bg-bg1 border-separator1 hover:border-separator2"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                    transition-colors duration-200
                    ${isHovered ? `bg-${suggestion.bgColor}/30` : "bg-bg2"}
                  `}
                >
                  <Icon
                    className={`
                      w-5 h-5 transition-colors duration-200
                      ${isHovered ? `text-${suggestion.color}` : "text-fg2"}
                    `}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-start gap-1 text-left min-w-0">
                  <h4 className="text-sm font-semibold text-fg0 group-hover:text-fg0">
                    {suggestion.title}
                  </h4>
                  <p className="text-xs text-fg3 leading-relaxed line-clamp-2">
                    {suggestion.topic}
                  </p>
                </div>

                {/* Voice Hint on Hover */}
                {isHovered && (
                  <div className="absolute inset-x-0 -bottom-1 flex justify-center">
                    <div className="bg-bg0 border border-separator1 rounded-full px-3 py-1 shadow-lg">
                      <p className="text-xs text-fg2">
                        💬 Dites :{" "}
                        <span className="font-semibold text-fgAccent1">
                          &quot;Rechercher {suggestion.title.toLowerCase()}&quot;
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Additional Hint */}
        <div className="flex items-center gap-2 text-xs text-fg4 mt-2">
          <div className="w-2 h-2 rounded-full bg-fgAccent1 animate-pulse" />
          <span>Cliquez sur une suggestion pour voir la commande vocale</span>
        </div>

        {/* Documentation Links */}
        <div className="flex items-center gap-4 text-xs mt-6">
          <a
            href="https://docs.exa.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg3 hover:text-fgAccent1 underline transition-colors"
          >
            Exa Docs
          </a>
          <span className="text-separator2">•</span>
          <a
            href="https://docs.livekit.io/agents"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg3 hover:text-fgAccent1 underline transition-colors"
          >
            LiveKit Agents Docs
          </a>
          <span className="text-separator2">•</span>
          <a
            href="https://livekit.io/join-slack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg3 hover:text-fgAccent1 underline transition-colors"
          >
            LiveKit Slack
          </a>
        </div>
      </div>
    </div>
  );
}
