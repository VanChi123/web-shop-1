import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  listItem = [
    {title: 'Lồng ghép tiêu chí xanh trong mua sắm công', img: 'https://muasamcong.mpi.gov.vn/content-provider/res/news/02-2184.jpg', day: '13/10/2022', viewer: 1632},
    {title: 'Điểm tin kế hoạch lựa chọn nhà thầu một số gói thầu lớn ngày 12/10', img: 'https://muasamcong.mpi.gov.vn/content-provider/res/news/07-4572.jpg', day: '13/10/2022', viewer: 1632},
    {title: 'Mua 132,854 tỷ đồng vật tư tiêu hao cho Bệnh viện Trung ương Huế', img: 'https://muasamcong.mpi.gov.vn/content-provider/res/news/06-3332.jpg', day: '13/10/2022', viewer: 1632},
    {title: 'Gói thầu mua sắm hàng hóa tại Chi cục Kiểm lâm Cao Bằng: Không sửa đổi nhiều tiêu chí hạn chế cạnh tranh', img: 'https://muasamcong.mpi.gov.vn/content-provider/res/news/08-7966.jpg', day: '13/10/2022', viewer: 1632},
    {title: 'Cao tốc Mỹ Thuận - Cần Thơ: Thầu chính, thầu phụ tăng tốc bù tiến độ', img: 'https://muasamcong.mpi.gov.vn/content-provider/res/news/04-4956.jpg', day: '13/10/2022', viewer: 1632},
  ]

  listStart = [0, 1, 5, 6]
  listMiddle = [2, 7]
  listEnd = [3, 4, 8, 9]

  constructor() { }

  ngOnInit(): void {
  }

}
