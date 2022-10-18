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


  listTinTuc = [
    {img: 'https://muasamcong.mpi.gov.vn/content-provider/res/news/02-2184.jpg', title: 'Lồng ghép tiêu chí xanh trong mua sắm công', dat: '17/03/2020', view: 34434, content_begin: 'TGVN. Ngày 4/11, Quốc hội tiếp tục họp phiên toàn thể tại Hội trường, trong đó các đại biểu tiếp tục thảo luận về những vấn đề liên quan'},
    {img: 'https://muasamcong.mpi.gov.vn/content-provider/res/news/02-2184.jpg', title: 'Lồng ghép tiêu chí xanh trong mua sắm công', dat: '17/03/2020', view: 34434, content_begin: 'TGVN. Ngày 4/11, Quốc hội tiếp tục họp phiên toàn thể tại Hội trường, trong đó các đại biểu tiếp tục thảo luận về những vấn đề liên quan'},
    {img: 'https://muasamcong.mpi.gov.vn/content-provider/res/news/02-2184.jpg', title: 'Lồng ghép tiêu chí xanh trong mua sắm công', dat: '17/03/2020', view: 34434, content_begin: 'TGVN. Ngày 4/11, Quốc hội tiếp tục họp phiên toàn thể tại Hội trường, trong đó các đại biểu tiếp tục thảo luận về những vấn đề liên quan'},
    {img: 'https://muasamcong.mpi.gov.vn/content-provider/res/news/02-2184.jpg', title: 'Lồng ghép tiêu chí xanh trong mua sắm công', dat: '17/03/2020', view: 34434, content_begin: 'TGVN. Ngày 4/11, Quốc hội tiếp tục họp phiên toàn thể tại Hội trường, trong đó các đại biểu tiếp tục thảo luận về những vấn đề liên quan'},
    {img: 'https://muasamcong.mpi.gov.vn/content-provider/res/news/02-2184.jpg', title: 'Lồng ghép tiêu chí xanh trong mua sắm công', dat: '17/03/2020', view: 34434, content_begin: 'TGVN. Ngày 4/11, Quốc hội tiếp tục họp phiên toàn thể tại Hội trường, trong đó các đại biểu tiếp tục thảo luận về những vấn đề liên quan'}
  ]

  listStart = [0, 1, 5, 6]
  listMiddle = [2, 7]
  listEnd = [3, 4, 8, 9]

  currentPage = 0;
  transListPagination = {
    totalPages: 10,
    totalElements: 100
  };

  constructor() { }

  ngOnInit(): void {
  }



  onSearch(event: any) {

  }

  getPageList() {
    if (!this.transListPagination || this.transListPagination?.totalPages === 0) {
      return [0];
    }
    const pages = [];
    for (let i = 0; i < this.transListPagination.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

}
