
if exists(select * from sys.objects where name='GetProjectsForEmployee' and type = 'p')
BEGIN
DROP PROCEDURE [dbo].[GetProjectsForEmployee]
END
GO

/****** Object:  StoredProcedure [dbo].[GetProjectsForEmployee]    Script Date: 2015-07-06 14:53:29 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[GetProjectsForEmployee]
	@EmployeeId int
AS
BEGIN
	SET NOCOUNT ON;
	select p.* from Project p
	inner join EmployeeProject ep on ep.ProjectId = p.ProjectId
	where ep.EmployeeId = @EmployeeId
END

GO

if exists(select * from sys.objects where name='GetBudgetForProject' and type = 'p')
BEGIN
DROP PROCEDURE [dbo].GetBudgetForProject
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE dbo.GetBudgetForProject
	@ProjectId int
AS
BEGIN
	SET NOCOUNT ON;
	select * from Budget where ProjectId = @ProjectId


END
GO


if exists(select * from sys.objects where name='GetProjectEstimate' and type = 'p')
BEGIN
DROP PROCEDURE [dbo].GetProjectEstimate
END
GO


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE dbo.GetProjectEstimate
	@ProjectId int
AS
BEGIN
	SET NOCOUNT ON;
	select * from ProjectEstimate where ProjectId = @ProjectId


END
GO


if exists(select * from sys.objects where name='GetTotalEmployeeWorkingHours' and type = 'p')
BEGIN
DROP PROCEDURE [dbo].GetTotalEmployeeWorkingHours
END
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE dbo.GetTotalEmployeeWorkingHours
	@ProjectId int
AS
BEGIN
	SET NOCOUNT ON;
	select * from EmployeeProjectWorkingHours where ProjectId = @ProjectId


END
GO
