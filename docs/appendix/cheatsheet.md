# Bảng Tham Khảo Nhanh

## Demo Thuật Toán Tìm Kiếm Nhị Phân

```mermaid
flowchart TD
    A[Bắt đầu: Mảng đã sắp xếp, giá trị mục tiêu] --> B[Đặt left = 0, right = array.length - 1]
    B --> C{left <= right?}
    C -->|Không| D[Không tìm thấy mục tiêu, trả về -1]
    C -->|Có| E[Tính mid = left + (right - left) / 2]
    E --> F{array[mid] == target?}
    F -->|Có| G[Tìm thấy! Trả về chỉ số mid]
    F -->|Không| H{array[mid] < target?}
    H -->|Có| I[Đặt left = mid + 1]
    H -->|Không| J[Đặt right = mid - 1]
    I --> C
    J --> C
    
    style A fill:#e1f5fe
    style G fill:#c8e6c9
    style D fill:#ffcdd2
```

## Ví Dụ Minh Họa

```mermaid
graph TD
    subgraph "Bước 1: Khởi tạo"
        A1["Mảng: [1, 3, 5, 7, 9, 11, 13]<br/>Mục tiêu: 7<br/>left=0, right=6, mid=3"]
    end
    
    subgraph "Bước 2: So sánh"
        B1["array[3] = 7<br/>7 == 7 ✓<br/>Tìm thấy tại chỉ số 3!"]
    end
    
    A1 --> B1
    
    style A1 fill:#fff3e0
    style B1 fill:#c8e6c9
```

Nội dung bảng tham khảo nhanh...
