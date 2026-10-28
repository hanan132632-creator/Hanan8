<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html dir="rtl" lang="ar">
      <head>
        <title>خريطة الموقع XML المباشرة | بوتيك مجوهرات النخبة الملكية (hanan.pro)</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif;
            background-color: #FAF8F5;
            color: #18181B;
            margin: 0;
            padding: 24px;
            direction: rtl;
          }
          .container {
            max-width: 1100px;
            margin: 0 auto;
          }
          .header {
            background: #18181B;
            color: #FAF8F5;
            padding: 32px;
            border-radius: 20px;
            border: 1px solid #D4AF37;
            margin-bottom: 24px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          }
          .badge {
            display: inline-block;
            background: rgba(212, 175, 55, 0.2);
            color: #D4AF37;
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 12px;
            font-weight: bold;
            border: 1px solid rgba(212, 175, 55, 0.4);
            margin-bottom: 12px;
          }
          h1 {
            margin: 0 0 12px 0;
            font-size: 26px;
            color: #FFFFFF;
          }
          p {
            margin: 0;
            font-size: 14px;
            color: rgba(255,255,255,0.75);
            line-height: 1.6;
          }
          .stats {
            margin-top: 16px;
            padding-top: 16px;
            border-top: 1px solid rgba(255,255,255,0.1);
            display: flex;
            gap: 16px;
            font-size: 13px;
            font-family: monospace;
            color: #D4AF37;
          }
          table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            background: #FFFFFF;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid #E2E8F0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          th {
            background: #18181B;
            color: #FAF8F5;
            text-align: right;
            padding: 14px 18px;
            font-size: 13px;
            font-weight: 600;
            border-bottom: 2px solid #D4AF37;
          }
          td {
            padding: 12px 18px;
            font-size: 13px;
            border-bottom: 1px solid #F1F5F9;
            vertical-align: middle;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background-color: #FAF8F5;
          }
          a {
            color: #B8902A;
            text-decoration: none;
            font-family: monospace;
            font-weight: 600;
            word-break: break-all;
          }
          a:hover {
            color: #18181B;
            text-decoration: underline;
          }
          .priority-high {
            background: #ECFDF5;
            color: #047857;
            padding: 2px 8px;
            border-radius: 6px;
            font-weight: bold;
            font-family: monospace;
          }
          .priority-med {
            background: #FFFBEB;
            color: #B45309;
            padding: 2px 8px;
            border-radius: 6px;
            font-weight: bold;
            font-family: monospace;
          }
          .footer-note {
            margin-top: 24px;
            text-align: center;
            font-size: 12px;
            color: #8C7A5B;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="badge">خريطة الموقع XML الرسمية · بروتوكول Sitemaps.org</div>
            <h1>خريطة الموقع وروابط الفهرسة المباشرة (hanan.pro/sitemap.xml)</h1>
            <p>
              يتم استعراض كافة الروابط المباشرة الدائمة لبوتيك مجوهرات النخبة الملكية تلقائياً. كل رابط في هذا الجدول هو رابط مباشر قابل للنقر الفوري والأرشفة المعتمدة لدى محركات البحث العالمية.
            </p>
            <div class="stats">
              <span>إجمالي الروابط المفهرسة: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> رابط</span>
              <span>·</span>
              <span>النطاق المعتمد: https://hanan.blog</span>
              <span>·</span>
              <span>حالة الملف: 200 OK متوافق 100%</span>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th style="width: 50px;">#</th>
                <th>الرابط المباشر (Direct Canonical URL)</th>
                <th style="width: 120px;">آخر تحديث</th>
                <th style="width: 100px;">التردد</th>
                <th style="width: 80px;">الأولوية</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td style="color: #8C7A5B; font-family: monospace;"><xsl:value-of select="position()"/></td>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td style="font-family: monospace; color: #64748B;">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                  <td style="font-family: monospace; color: #64748B;">
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority &gt;= 0.9">
                        <span class="priority-high"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="priority-med"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <div class="footer-note">
            جميع الحقوق محفوظة © 2026 بوتيك مجوهرات النخبة الملكية · https://hanan.blog
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
