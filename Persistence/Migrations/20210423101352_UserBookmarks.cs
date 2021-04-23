using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class UserBookmarks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OwnerId",
                table: "Bookmarks",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Bookmarks_OwnerId",
                table: "Bookmarks",
                column: "OwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookmarks_AspNetUsers_OwnerId",
                table: "Bookmarks",
                column: "OwnerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookmarks_AspNetUsers_OwnerId",
                table: "Bookmarks");

            migrationBuilder.DropIndex(
                name: "IX_Bookmarks_OwnerId",
                table: "Bookmarks");

            migrationBuilder.DropColumn(
                name: "OwnerId",
                table: "Bookmarks");
        }
    }
}
