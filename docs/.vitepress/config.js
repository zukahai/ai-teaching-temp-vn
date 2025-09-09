import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  base: '/documentation-template/',
  title: 'Tài Liệu Dự Án',
  description: 'Mẫu tài liệu hiện đại cho mọi dự án',
  lang: 'vi-VN',
  ignoreDeadLinks: true,
  
  mermaid: {
    // mermaid config options
  },

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          'vi-VN': {
            translations: {
              button: {
                buttonText: 'Tìm kiếm',
                buttonAriaLabel: 'Tìm kiếm tài liệu'
              },
              modal: {
                displayDetails: 'Hiển thị chi tiết',
                resetButtonTitle: 'Xóa tìm kiếm',
                backButtonTitle: 'Đóng tìm kiếm',
                noResultsText: 'Không tìm thấy kết quả',
                footer: {
                  selectText: 'để chọn',
                  navigateText: 'để điều hướng',
                  closeText: 'để đóng'
                }
              }
            }
          }
        }
      }
    },
    nav: [
      { text: 'Trang Chủ', link: '/' },
      { text: 'Bắt Đầu', link: '/introduction/intro' },
      { text: 'Tài Nguyên', link: '/appendix/resources' },
      { text: 'GitHub', link: 'https://github.com/yourusername/your-project' }
    ],

    sidebar: [
      {
        text: '📋 Giới Thiệu',
        collapsed: false,
        items: [
          { text: 'Bắt Đầu', link: '/introduction/intro' },
        ]
      },
      {
        text: '📚 Phụ Lục',
        collapsed: true,
        items: [
          { text: 'Tham Khảo Nhanh', link: '/appendix/cheatsheet' },
          { text: 'Câu Hỏi Thường Gặp', link: '/appendix/faq' },
          { text: 'Tài Nguyên', link: '/appendix/resources' }
        ]
      }
    ],

    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/yourusername/your-project' 
      }
    ],

    footer: {
      message: 'Mẫu tài liệu hiện đại',
      copyright: 'Bản quyền © 2024'
    },

    editLink: {
      pattern: 'https://github.com/yourusername/your-project/edit/main/docs/:path',
      text: 'Chỉnh sửa trang này trên GitHub'
    },

    lastUpdated: {
      text: 'Cập nhật lần cuối',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})