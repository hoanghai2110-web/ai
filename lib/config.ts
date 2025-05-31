import {
  BookOpenText,
  Brain,
  Code,
  Lightbulb,
  Notepad,
  PaintBrush,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr"

export const NON_AUTH_DAILY_MESSAGE_LIMIT = 5
export const AUTH_DAILY_MESSAGE_LIMIT = 20
export const REMAINING_QUERY_ALERT_THRESHOLD = 2
export const DAILY_FILE_UPLOAD_LIMIT = 5
export const DAILY_SPECIAL_AGENT_LIMIT = 2
export const DAILY_LIMIT_PRO_MODELS = 5

export const FREE_MODELS_IDS = [
  "gemini-2.5-flash-preview-05-20",
  "gemini-2.0-flash"
]

export const MODEL_DEFAULT = "gemini-2.5-flash-preview-05-20"

export const APP_NAME = "ViMind - AI"
export const APP_DOMAIN = "#"
export const APP_DESCRIPTION =
  "ViMind là ứng dụng AI Chat miễn phí, hoạt động dựa trên nền tảng mô hình ngôn ngữ hiện đại tương đương Gemma 3 7B, được tinh chỉnh để hiểu ngữ cảnh tiếng Việt tốt hơn."

// SUGGESTIONS bằng tiếng Việt
export const SUGGESTIONS = [
  {
    label: "Tóm tắt",
    highlight: "Tóm tắt",
    prompt: `Tóm tắt`,
    items: [
      "Tóm tắt cuộc Cách mạng Pháp",
      "Tóm tắt nội dung phim Inception",
      "Tóm tắt Thế chiến thứ hai trong 5 câu",
      "Tóm tắt lợi ích của thiền định",
    ],
    icon: Notepad,
  },
  {
    label: "Lập trình",
    highlight: "Giúp tôi",
    prompt: `Giúp tôi`,
    items: [
      "Giúp tôi viết hàm đảo ngược chuỗi trong JavaScript",
      "Giúp tôi tạo navbar responsive bằng HTML/CSS",
      "Giúp tôi viết truy vấn SQL tìm email trùng lặp",
      "Giúp tôi chuyển đổi hàm Python này sang JavaScript",
    ],
    icon: Code,
  },
  {
    label: "Thiết kế",
    highlight: "Thiết kế",
    prompt: `Thiết kế`,
    items: [
      "Thiết kế bảng màu cho blog công nghệ",
      "Thiết kế checklist UX cho ứng dụng di động",
      "Đề xuất 5 cặp font tuyệt vời cho landing page",
      "Tư vấn cải thiện CTA với các mẹo hữu ích",
    ],
    icon: PaintBrush,
  },
  {
    label: "Nghiên cứu",
    highlight: "Nghiên cứu",
    prompt: `Nghiên cứu`,
    items: [
      "Nghiên cứu ưu, nhược điểm của làm việc từ xa",
      "So sánh Apple Vision Pro và Meta Quest",
      "Tìm hiểu các thực hành tốt nhất về bảo mật mật khẩu",
      "Nghiên cứu xu hướng mới về năng lượng tái tạo",
    ],
    icon: BookOpenText,
  },
  {
    label: "Truyền cảm hứng",
    highlight: "Truyền cảm hứng",
    prompt: `Truyền cảm hứng`,
    items: [
      "Cho tôi một câu nói hay về sự sáng tạo",
      "Gợi ý chủ đề viết về sự cô đơn",
      "Gợi ý cách bắt đầu newsletter thật thơ",
      "Miêu tả một buổi sáng yên bình trong thiên nhiên",
    ],
    icon: Sparkle,
  },
  {
    label: "Suy ngẫm sâu sắc",
    highlight: "Suy ngẫm",
    prompt: `Suy ngẫm`,
    items: [
      "Vì sao con người sợ sự bất định?",
      "Điều gì làm nên một cuộc trò chuyện ý nghĩa?",
      "Giải thích khái niệm thời gian một cách đơn giản",
      "Sống có chủ đích nghĩa là gì?",
    ],
    icon: Brain,
  },
  {
    label: "Giải thích dễ hiểu",
    highlight: "Giải thích",
    prompt: `Giải thích`,
    items: [
      "Giải thích vật lý lượng tử như cho trẻ 10 tuổi",
      "Giải thích chủ nghĩa khắc kỷ một cách đơn giản",
      "Giải thích cách hoạt động của mạng neural",
      "Phân biệt AI và AGI",
    ],
    icon: Lightbulb,
  },
]

// SYSTEM_PROMPT_DEFAULT có thinking AI (nếu muốn)
export const SYSTEM_PROMPT_DEFAULT = `Bạn là ViMind AI của Vietchart, một người bạn thân thiện, vui vẻ.`

export const MESSAGE_MAX_LENGTH = 4000

export const CURATED_AGENTS_SLUGS = [
  "github/ibelick/prompt-kit",
  "github/ibelick/zola",
  "github/shadcn/ui",
  "tweet-vibe-checker",
  "blog-draft",
]

// Thêm cấu hình sampling cho AI model
export const MODEL_SAMPLING_CONFIG = {
  temperature: 0.85, // Nhiệt độ sampling
  top_k: 50,        // Top-k sampling
  top_p: 0.9 
  // Top-p (nucleus) sampling
}
