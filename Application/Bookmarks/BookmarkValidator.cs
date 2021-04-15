using Domain;
using FluentValidation;

namespace Application.Bookmarks
{
    public class BookmarkValidator : AbstractValidator<Bookmark>
    {
        public BookmarkValidator()
        {
            RuleFor(bm => bm.Title).NotEmpty();
            RuleFor(bm => bm.Description).NotEmpty();
            RuleFor(bm => bm.Url).NotEmpty();
            RuleFor(bm => bm.DateCreated).NotEmpty();
            RuleFor(bm => bm.Tags).NotEmpty();
        }
    }
}